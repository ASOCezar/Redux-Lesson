import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 74px;
  max-width: 960px;

  padding: 18px 12px 24.5px 10px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.contrastText};
    font-size: ${theme.font.sizes.medium};
    font-weight: 700;
  `}
`;

export const CartGroup = styled.div`
  display: flex;
  gap: 9.33px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const MyCartText = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.contrastText};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: 600;
    line-height: 19px;
  `}
`;

export const CartItemsCounter = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xxsmall};
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
  `}
`;
