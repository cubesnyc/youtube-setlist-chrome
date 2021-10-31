import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 10px;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by <a href="https://jodylecompte.com">Jody LeCompte</a>
      </div>
    </FooterContainer>
  );
};
