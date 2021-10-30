import { css } from "./styles";
import { generateListComponent } from "./helpers/html";

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

function mountList() {
  unmountList();

  const rootElement = document.getElementById("secondary-inner");
  const container = document.createElement("div");

  container.id = "yt-setlist";

  const stylesheet = document.createElement("style");
  stylesheet.innerHTML = css;

  const html = generateListComponent(tempData);

  document.head.appendChild(stylesheet);
  container.innerHTML = generateListComponent(tempData);
  rootElement?.prepend(container);
}

document.body.addEventListener("yt-navigate-finish", mountList);
window.addEventListener("load", mountList);

export {};
