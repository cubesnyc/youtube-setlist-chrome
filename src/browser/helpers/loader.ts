import { getVideoId, verifyVideoUrl } from "./url";

export const loadVideoData = async () => {
  if (!verifyVideoUrl()) return;

  const videoId = getVideoId();

  const response = await fetch(`https://ytsetlist.jodylecompte.com/load/${videoId}`);
  const data = await response.json();

  if (data.status === "error") return false;

  return data.list.timestamps;
};
