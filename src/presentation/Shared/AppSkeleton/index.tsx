import styled, { css } from 'styled-components';

import Header from '../Header';

export type AppSkeletonProps = {
  children?: React.ReactNode;
};

const AppSkeleton: React.FC<AppSkeletonProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    max-width: 100vw;
    height: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
      padding: 0 16px 16px 16px;
    }
  `}
`;

export default AppSkeleton;
