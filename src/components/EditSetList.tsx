import { useState } from "react";

import { Alert, Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { Trash } from "react-bootstrap-icons";
import { v4 as uuidv4 } from "uuid";

import { ITimestamp } from "../interfaces/ITimestamp";

interface IEditSetListProps {
  data: ITimestamp[];
  setData: any;
  isNew: boolean;
  setIsNew: any;
  videoId: string;
  pageTitle: string;
}

const FormGroup = styled(Form.Group)`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  margin-bottom: 1em;
  width: 80%;
  margin: 1em auto;

  input {
    width: 48%;
    &:nth-child(1) {
      margin-right: 1em;
    }
  }

  button {
    margin-left: 1em;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 1em;
  }
`;

export const EditSetList = ({
  data,
  setData,
  isNew,
  setIsNew,
  videoId,
  pageTitle,
}: IEditSetListProps) => {
  const [isSaved, setIsSaved] = useState(false);
  const [saveError, setSaveError] = useState(false);

  const newEntry = () => {
    const newData = [...data, { timestamp: "", label: "", _id: uuidv4() }];
    setData(newData);
  };

  const removeEntry = (id: string) => {
    const newData = data.filter((entry) => entry._id !== id);
    setData(newData);
  };

  const handleChange = (e: any, id: string) => {
    const findIndex = data.findIndex((entry) => entry._id === id);

    if (e.target.id.includes("label")) {
      const newData = [...data];
      newData[findIndex].label = e.target.value;
      setData(newData);
    } else {
      const newData = [...data];
      newData[findIndex].timestamp = e.target.value;
      setData(newData);
    }
  };

  const handleSubmit = () => {
    setIsNew(false);
    setIsSaved(false);
    setSaveError(false);

    const payload = {
      videoID: videoId,
      timestamps: data.map((item) => ({
        timestamp: item.timestamp,
        label: item.label,
      })),
    };

    let endpoint = "https://ytsetlist.jodylecompte.com/edit";
    let method = "PATCH";

    if (isNew) {
      endpoint = "https://ytsetlist.jodylecompte.com/create";
      method = "POST";
    }

    fetch(endpoint, {
      method: method,
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setIsSaved(true);

        if (isNew) {
          setIsNew(false);
        }

        setTimeout(() => {
          setIsSaved(false);
        }, 1000);
      })
      .catch(() => {
        setSaveError(true);

        setTimeout(() => {
          setSaveError(false);
        }, 1000);
      });
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "2em", fontWeight: 700 }}>{pageTitle}</div>
      <Form style={{ marginTop: "2em" }}>
        {data.map((item, index) => {
          return (
            <FormGroup key={index}>
              <Form.Control
                type="text"
                id={`timestamp_${item._id}`}
                value={item.timestamp}
                placeholder="Enter Timestamp"
                onChange={(e) => handleChange(e, item._id)}
              />
              <Form.Control
                type="text"
                id={`label_${item._id}`}
                value={item.label}
                placeholder="Enter Label"
                onChange={(e) => handleChange(e, item._id)}
              />
              <Button variant="danger" onClick={() => removeEntry(item._id)}>
                <Trash color="#FFF" />
              </Button>
            </FormGroup>
          );
        })}
        {isSaved && <Alert variant="success">Saved!</Alert>}
        {saveError && <Alert variant="danger">Error!</Alert>}
        <ButtonWrapper>
          <Button variant="warning" onClick={newEntry}>
            +
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </ButtonWrapper>
      </Form>
    </div>
  );
};
