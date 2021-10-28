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
        <a href="">${item.timestamp}</a> - ${item.label}
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

  const stylesheetCSS = `
    #yt-setlist {
      margin-bottom: 20px;
      font-size: 16px;
      border: 1px solid var(--yt-spec-10-percent-layer);
      color: var(--yt-endpoint-color, var(--yt-spec-text-primary));
    }

    #yt-setlist h2 {
      color: var(--yt-endpoint-color, var(--yt-spec-text-primary));
    }

    #yt-setlist .yts-header {
      padding: 10px;
      padding-left: 20px;
      background-color: var(--yt-spec-brand-background-primary);
    }

    #yt-setlist .yts-list {
      padding: 10px;
      padding-left: 20px;
    }

    #yt-setlist .yts-list a {
      color: var(--yt-endpoint-color, var(--yt-spec-call-to-action));
    }
  `;

  const stylesheet = document.createElement("style");
  stylesheet.innerHTML = stylesheetCSS;

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
