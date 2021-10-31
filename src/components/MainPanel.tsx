import styled from "styled-components";

import { SetlistPane } from "./SetlistPane";

import { ErrorMessage } from "./ErrorMessage";

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const MainPanel = () => {
  // const currentUrl = document.location.href;
  const currentUrl = "https://www.youtube.com/watch?v=7Mxg4VkkRRI";
  const videoId = "7Mxg4VkkRRI";

  if (!currentUrl.includes("youtube.com")) {
    return (
      <CenteredContainer>
        <ErrorMessage>
          It looks like you are not on a valid YouTube page. Please navigate to your favorite
          concert or album to get started
        </ErrorMessage>
      </CenteredContainer>
    );
  }

  return <SetlistPane />;

  // return fetch(`https://ytsetlist.jodylecompte.com/load/${videoId}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     if (data.status === "error") {
  //       return <div>Not found bro</div>;
  //     } else {
  //       return <div>Found it bro</div>;
  //     }
  //   })
  //   .catch(() => {
  //     return (
  //       <CenteredContainer>
  //         <ErrorMessage>
  //           It looks like the API is currently down. If this issue persists, please report a bug.
  //         </ErrorMessage>
  //       </CenteredContainer>
  //     );
  //   });
};
