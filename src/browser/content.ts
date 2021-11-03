import { css } from "./styles";
import { generateListComponent } from "./helpers/html";
import { loadVideoData } from "./helpers/loader";

const unmountList = () => {
  const el = document.getElementById("yt-setlist");

  if (el) {
    el.remove();
  }
};

const mountList = async () => {
  const data = await loadVideoData();

  if (!data) return;

  const html = generateListComponent(data);

  const rootElement = document.getElementById("secondary-inner");
  const container = document.createElement("div");
  container.id = "yt-setlist";

  const stylesheet = document.createElement("style");
  stylesheet.innerHTML = css;

  document.head.appendChild(stylesheet);

  const checkNode = document.getElementById("yt-setlist");
  if (checkNode) return;

  container.innerHTML = html;
  rootElement?.prepend(container);
};

document.body.addEventListener("yt-navigate-start", unmountList);
document.body.addEventListener("yt-navigate-finish", mountList);
window.addEventListener("load", mountList);

export {};
