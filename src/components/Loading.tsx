import { ClockLoader } from "react-spinners";

import { CenteredContainer } from "./CenteredContainer";

export const Loading = () => {
  return (
    <CenteredContainer>
      <ClockLoader size={50} color={"#123abc"} />
    </CenteredContainer>
  );
};
