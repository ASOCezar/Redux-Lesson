import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    height: 40px;
    width: fit-content;
    min-width: 180px;
    text-transform: uppercase;
    background-color: ${theme.colors.lightBlue};
    border: none;
    border-radius: 4px;
    padding: 8px;
    color: ${theme.colors.contrastText};

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.contrastText};
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: 700;
    text-transform: uppercase;
  `}
`;
