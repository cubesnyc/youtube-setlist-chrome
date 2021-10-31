import { CenteredContainer } from "./CenteredContainer";
import { ErrorMessage } from "./ErrorMessage";
import { SetlistPane } from "./SetlistPane";

export const MainPanel = () => {
  // Commented out to save time using dev mode instead of updating
  // fresh build in chrome sideloading
  // const currentUrl = document.location.href;
  const currentUrl = "https://www.youtube.com/watch?v=7Mxg4VkkRRI";

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
};
