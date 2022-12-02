import styled, { css } from 'styled-components';

import { Router } from './router';

function App() {
  return (
    <Wrapper>
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
