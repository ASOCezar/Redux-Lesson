import styled, { css, keyframes } from 'styled-components';

const Spin = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`;

export const Spinner = styled.div`
  ${({ theme }) => css`
    margin: auto;
    position: relative;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: conic-gradient(
      from 90deg at 50% 50%,
      rgba(128, 128, 128, 0.0001) -46.17deg,
      #ffffff 313.55deg,
      rgba(128, 128, 128, 0.0001) 313.83deg,
      #ffffff 673.55deg
    );
    animation: ${Spin} 1s linear infinite;

    &::before {
      position: absolute;
      content: '';
      background: ${theme.colors.background};
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 88%;
      height: 88%;
      border-radius: 50%;
    }
  `}
`;
