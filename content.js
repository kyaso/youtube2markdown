browser.runtime.onMessage.addListener((request) => {
    let title = document.querySelector("h1.ytd-watch-metadata")?.innerText;
    if (title === undefined) throw new Error("Could not find title of video");
    return Promise.resolve({title: title});
});
