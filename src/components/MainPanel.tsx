import { useState, useEffect } from "react";

import { CenteredContainer } from "./CenteredContainer";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";
import { SetlistPane } from "./SetlistPane";

import { verifyVideoUrl } from "../helpers/popupUrl";

export const MainPanel = () => {
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState("");
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: any) => {
      setCurrentUrl(tabs[0].url);

      const title = tabs[0].title.replace("- YouTube", "");

      setPageTitle(title);
      setLoading(false);
    });
  });

  if (loading) {
    return <Loading />;
  } else if (!loading && currentUrl && !verifyVideoUrl(currentUrl)) {
    return (
      <CenteredContainer>
        <ErrorMessage>
          It looks like you are not on a valid YouTube page. Please navigate to your favorite
          concert or album to get started
        </ErrorMessage>
      </CenteredContainer>
    );
  } else {
    return <SetlistPane videoUrl={currentUrl} pageTitle={pageTitle} />;
  }
};
