export const timestampToSeconds = (timestamp: string) => {
  let tempTimestamp = timestamp;
  if (tempTimestamp.split(":").length == 2) tempTimestamp = "0:" + tempTimestamp;

  const [hours, minutes, seconds] = tempTimestamp.split(":").map((num) => parseInt(num, 10));

  return hours * 3600 + minutes * 60 + seconds;
};
