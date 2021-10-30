export const verifyVideoUrl = () => {
  const url = window.location.href;

  return url.includes("watch") && !url.includes("list");
};

export const getVideoId = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  if (params.v) {
    return params.v;
  } else {
    return false;
  }
};

export const getTimestampUrl = (timestamp: string): string => {
  let videoId = getVideoId();

  const [minutes, seconds] = timestamp.split(":");
  const secondsTotal = parseInt(minutes) * 60 + parseInt(seconds);

  return `/watch?v=${videoId}&t=${secondsTotal}`;
};
