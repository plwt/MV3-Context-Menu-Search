function searchWithDuckDuckGo(info, tab) {
  const searchText = info.selectionText;
  const searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(searchText)}`;
  browser.tabs.create({ url: searchUrl });
}

browser.contextMenus.create({
  id: "search-with-duckduckgo",
  title: "Search with DuckDuckGo",
  contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-with-duckduckgo") {
    searchWithDuckDuckGo(info, tab);
  }
});
