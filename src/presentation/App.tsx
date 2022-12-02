import styled, { css } from 'styled-components';

import Header from './components/Header';
import { Router } from './router';

function App() {
  return (
    <Wrapper>
      <Header />
      <Router />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    width: 100vw;
    height: 100vh;
  `}
`;

export default App;
