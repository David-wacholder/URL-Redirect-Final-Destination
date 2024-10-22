// Create context menu item
chrome.contextMenus.create({
  id: "redirectToFinalUrl",
  title: "Redirect to Final URL",
  contexts: ["link"]
});

// Add listener for context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "redirectToFinalUrl") {
    const originalUrl = info.linkUrl;
    const apiUrl = `https://url-redirect-final-destination.vercel.app/get-final-url?url=${encodeURIComponent(originalUrl)}`;

    // Open the final URL in a new tab
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.finalUrl) {
          chrome.tabs.create({ url: data.finalUrl });
        } else {
          alert("Could not get the final URL.");
        }
      })
      .catch(error => {
        console.error("Error fetching final URL:", error);
        alert("An error occurred while fetching the final URL.");
      });
  }
});
