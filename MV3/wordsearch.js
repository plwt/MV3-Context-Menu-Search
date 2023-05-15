function onRequest(info, tab) {
	var selection = info.selectionText;
//do something with the selection
if(selection){
	var serviceCall = 'https://www.google.com/search?q=' + encodeURIComponent(selection);
	browser.tabs.create({url: serviceCall});
}
};
browser.contextMenus.create({
	id: "word_search",
	contexts: ["selection"],
	title: "Search web for word",
	"onclick" : onRequest
});
