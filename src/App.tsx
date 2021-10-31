import styled from "styled-components";

import { MainPanel } from "./components/MainPanel";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 560px;
  width: 560px;
  overflow-x: scroll;
  background-color: #fcfcfc;
  border-radius: 5px;
  margin: 0 auto;
`;

const Content = styled.main`
  flex: 1;
  background: #fff;
  overflow: scroll;
  height: 487px;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Content>
        <MainPanel />
      </Content>
      <Footer />
    </AppWrapper>
  );
}

export default App;
