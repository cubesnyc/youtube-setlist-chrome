export const getTabUrl = () => {
  return chrome.tabs.query({ active: true, currentWindow: true }).then((tabs) => tabs[0].url);
};

export const verifyVideoUrl = (url: string) => {
  return url.includes("youtube.com") && url.includes("/watch") && !url.includes("list");
};
