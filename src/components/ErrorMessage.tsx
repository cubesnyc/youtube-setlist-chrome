import styled from "styled-components";

interface IErrorMessageProp {
  children: React.ReactNode;
}

const MessageWrapper = styled.div`
  width: 60%;
  text-align: center;
`;

export const ErrorMessage = ({ children }: IErrorMessageProp) => {
  return (
    <MessageWrapper>
      <h3>Whoops!</h3>
      <p>{children}</p>
    </MessageWrapper>
  );
};
