function searchWithGoogle(info, tab) {
  const searchText = info.selectionText;
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
    searchText
  )}`;
  browser.tabs.create({ url: searchUrl });
}
browser.contextMenus.create({
  id: "search-with-google",
  title: "Search with Google",
  contexts: ["selection"],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-with-google") {
    searchWithGoogle(info, tab);
  }
});
