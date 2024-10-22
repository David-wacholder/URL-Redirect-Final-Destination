chrome.contextMenus.create({
  id: "checkRedirect",
  title: "Check Final URL",
  contexts: ["link"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log("Context menu clicked"); // בדיקה אם האירוע מופעל
  if (info.menuItemId === "checkRedirect") {
    const originalUrl = info.linkUrl;
    console.log("Original URL:", originalUrl); // בדיקה אם הכתובת מתקבלת

    const apiUrl = `https://url-redirect-final-destination.vercel.app/get-final-url?url=${encodeURIComponent(originalUrl)}`;
    console.log("API URL:", apiUrl); // בדיקה אם הכתובת ל-API נבנית נכון

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log("Response from API:", data); // בדיקה אם התקבלה תשובה מה-API
        if (data.finalUrl) {
          chrome.tabs.create({ url: data.finalUrl });
          console.log("Opening final URL:", data.finalUrl); // בדיקה אם הכתובת נפתחת
        } else {
          alert("Failed to retrieve the final URL.");
        }
      })
      .catch(error => {
        console.error("Error fetching the final URL:", error);
        alert("An error occurred while checking the redirect.");
      });
  }
});
