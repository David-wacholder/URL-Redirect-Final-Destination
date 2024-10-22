// מחיקת כל התפריטים כדי למנוע כפילויות
chrome.contextMenus.removeAll(() => {
  // יצירת תפריט חדש
  chrome.contextMenus.create({
    id: "checkRedirect",
    title: "Check Final URL",
    contexts: ["link"]
  });
});

// מאזין לאירוע לחיצה על התפריט
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "checkRedirect" && info.linkUrl) {
    // קריאה לפונקציה לטיפול בקישור
    checkFinalURL(info.linkUrl);
  }
});

// פונקציה לבדוק את ה-URL הסופי
function checkFinalURL(linkUrl) {
  const apiUrl = `https://url-redirect-final-destination.vercel.app/get-final-url?url=${encodeURIComponent(linkUrl)}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text(); // קרא את התשובה כטקסט
    })
    .then(text => {
      try {
        const data = JSON.parse(text); // נסה להמיר ל-JSON
        console.log("Response from API:", data);
        if (data.finalUrl) {
          chrome.tabs.create({ url: data.finalUrl }); // פתיחת ה-URL הסופי בלשונית חדשה
          console.log("Opening final URL:", data.finalUrl);
        } else {
          chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icon.png',
            title: 'Failed',
            message: 'Failed to retrieve the final URL.'
          });
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icon.png',
          title: 'Error',
          message: 'Received invalid response format.'
        });
      }
    })
    .catch(error => {
      console.error("Error fetching the final URL:", error);
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Error',
        message: 'An error occurred while checking the redirect.'
      });
    });
}
