import { getTimestampUrl } from "./url";

import { ITimestamp } from "../../interfaces/ITimestamp";

export const generateTimestampList = (data: ITimestamp[]) => {
  let html = "";

  data.forEach((item: any) => {
    html += `
      <div>
        <a href="${getTimestampUrl(item.timestamp)}" dir="auto" class="yt-simple-endpoint spf-link">
          ${item.timestamp}
        </a>
        - ${item.label}
      </div>
    `;
  });

  html += `</table>`;

  return html;
};

export const generateListComponent = (data: ITimestamp[]) => {
  const listHtml = generateTimestampList(data);

  return `
    <div>
      <div class="yts-header">
        <h2>YouTube Setlist</h2>
      </div>
      <div class="yts-list">
        ${listHtml}
      </div>
    </div>
`;
};
