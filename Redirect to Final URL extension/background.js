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
    // יצירת URL של ה-API המבצע רידיירקט
    const redirectUrl = `https://url-redirect-final-destination.vercel.app/get-final-url?url=${encodeURIComponent(info.linkUrl)}`;
    
    // פתיחת לשונית חדשה עם הכתובת הסופית
    chrome.tabs.create({ url: redirectUrl });
  }
});
