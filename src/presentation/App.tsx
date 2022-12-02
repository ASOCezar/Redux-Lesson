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
    max-width: 100vw;
    height: 100%;
    min-height: 100vh;

    @media (max-width: 1024px) {
      padding: 0 16px 16px 16px;
    }
  `}
`;

export default App;
