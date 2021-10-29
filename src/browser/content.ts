import { css } from "./styles";
import { getTimestampUrl, verifyVideoUrl } from "./helpers/url";

console.log("url: ", verifyVideoUrl());

const rootElement = document.getElementById("secondary-inner");
const container = document.createElement("div");

function convertToSeconds(time: string): number {
  const [minutes, seconds] = time.split(":").map(Number);
  return minutes * 60 + seconds;
}

const tempData = [
  { timestamp: "1:24", label: "Don't Stay" },
  { timestamp: "4:33", label: "Somewhere l Belong" },
  { timestamp: "8:09", label: "Lying from You" },
  { timestamp: "11:43", label: "Papercut" },
  { timestamp: "14:50", label: "Points of Authority" },
  { timestamp: "18:16", label: "Runaway" },
  { timestamp: "21:53", label: "Faint" },
  { timestamp: "24:43", label: "From the lnside" },
  { timestamp: "27:45", label: "Figure.09" },
  { timestamp: "31:36", label: "With You" },
  { timestamp: "34:56", label: "By Myself" },
  { timestamp: "40:17", label: "P5HNG ME A*WY" },
  { timestamp: "46:18", label: "Numb" },
  { timestamp: "49:26", label: "Crawling" },
  { timestamp: "53:13", label: "In the End" },
  { timestamp: "56:47", label: "A Place for My Head" },
  { timestamp: "1:01:35", label: "One Step Closer" },
];

function unmountList() {
  const el = document.getElementById("yt-setlist");

  if (el) {
    el.remove();
  }
}

function generateListHtml(data: any) {
  let html = `<table>`;

  data.forEach((item: any) => {
    html += `
      <div>
        <a href="${getTimestampUrl(
          item.timestamp
        )}" dir="auto" class="yt-simple-endpoint">
          ${item.timestamp}
        </a>
        - ${item.label}
      </div>
    `;
  });

  html += `</table>`;

  return html;
}

function mountList() {
  unmountList();

  const el = document.createElement("div");
  el.id = "yt-setlist";

  const html = generateListHtml(tempData);

  const stylesheet = document.createElement("style");
  stylesheet.innerHTML = css;

  document.head.appendChild(stylesheet);

  el.innerHTML = `
    <div>
        <div class="yts-header">
            <h2>YouTube Setlist</h2>
        </div>
        <div class="yts-list">
          ${html}
        </div>
    </div>
  `;

  rootElement?.prepend(el);
}

document.body.addEventListener("yt-navigate-finish", mountList);
window.addEventListener("load", mountList);

export {};
