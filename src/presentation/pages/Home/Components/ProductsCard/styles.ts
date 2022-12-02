import styled, { css } from 'styled-components';

import { Button as StyledButton } from '../../../../Shared/Button/styles';

export const Wrapper = styled.li`
  ${({ theme }) => css`
    width: 100%;

    background-color: ${theme.colors.contrastText};
    padding: 11px 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
  `}
`;

export const Cover = styled.img`
  width: 147px;
  height: 188px;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: 700;
    color: ${theme.colors.darkText};
    margin-top: 7px;
  `}
`;

export const Price = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: 700;
    color: ${theme.colors.darkText};
    margin-top: 7px;
  `}
`;

type ButtonProps = {
  backgroundColor: string;
  shadowColor: string;
};

export const Button = styled(StyledButton)<ButtonProps>`
  ${({ backgroundColor, shadowColor }) => css`
    background-color: ${backgroundColor};
    margin-top: 8px;
    width: 100%;

    :focus {
      box-shadow: 0 0 0 0.2rem ${shadowColor};
    }
  `}
`;

export const ButtonText = styled.p`
  margin-left: 12px;
`;

export const CartInfo = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-start;
`;
