console.log("Extension loaded");

browser.contextMenus.create({
  id: "copy-yt-link",
  title: "Copy this video as Markdown link",
  contexts: ["page"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "copy-yt-link":
      copyVideoTitleLink(tab);
      break;
  }
})

function copyVideoTitleLink(tab) {
    browser.tabs.sendMessage(tab.id, {})
        .then((response) => {
            let link = getMDLink(response.title, tab.url);
            console.log(link);
            navigator.clipboard.writeText(link);
        })
        .catch((error) => console.log(error));
}

function getMDLink(title, url) {
    return `[${title}](${url})`
}

