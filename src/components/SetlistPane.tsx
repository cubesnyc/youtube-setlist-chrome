import { useState, useEffect } from "react";

import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import { CenteredContainer } from "./CenteredContainer";
import { EditSetList } from "./EditSetList";
import { ErrorMessage } from "./ErrorMessage";
import { Loading } from "./Loading";

import { useLocalStorage } from "../hooks/useLocalStorage";

interface ISetListPaneProps {
  videoUrl: string;
  pageTitle: string;
}

export const SetlistPane = ({ videoUrl, pageTitle }: ISetListPaneProps) => {
  const queryStart = videoUrl.indexOf("?");
  const queryStrings = videoUrl.substring(queryStart);
  const params = new URLSearchParams(queryStrings);
  const videoId = params.get("v") as string;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isNew, setIsNew] = useLocalStorage(`yt-setlist-${videoId}-status`, false);
  const [data, setData] = useLocalStorage(`yt-setlist-${videoId}`, []);

  const createNewList = () => {
    setIsNew(true);
    setData([{ timestamp: "0:00", label: "Intro", _id: uuidv4() }]);
  };

  useEffect(() => {
    if (data.length !== 0) {
      setLoading(false);
      return;
    }

    fetch(`https://ytsetlist.jodylecompte.com/load/${videoId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setData(data.list.timestamps);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <CenteredContainer>
        <ErrorMessage>
          An error occurred while loading the setlist. Please try again later and report a bug if
          problem persists.
        </ErrorMessage>
      </CenteredContainer>
    );
  }

  if (!loading && !error && data.length === 0) {
    return (
      <CenteredContainer>
        <ErrorMessage>There is no set list for this video yet.</ErrorMessage>
        <div style={{ marginTop: "1em" }}>
          <Button onClick={createNewList}>Create Setlist</Button>
        </div>
      </CenteredContainer>
    );
  }

  return (
    <EditSetList
      data={data}
      setData={setData}
      isNew={isNew}
      setIsNew={setIsNew}
      videoId={videoId}
      pageTitle={pageTitle}
    />
  );
};
