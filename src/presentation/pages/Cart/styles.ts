import styled, { css } from 'styled-components';

export const CartSection = styled.section`
  ${({ theme }) => css`
    max-height: calc(100vh - 220px);
    overflow-y: scroll;
    width: 100%;
    max-width: 960px;
    margin: 24px auto 0 auto;
    background-color: ${theme.colors.contrastText};
    padding: 24px 24px 0 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px 4px 0 0;

    @media (max-width: 1024px) {
      max-height: unset;
      height: calc(100vh - 230px);
      padding: 16px 16px 0 16px;
    }
  `}
`;

export const Divider = styled.hr`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.gray};
    margin-top: 21px;
  `}
`;

export const ActionWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 960px;
    background-color: ${theme.colors.contrastText};
    padding: 21px 24px 21px 24px;
    border-radius: 0 0 4px 4px;
    margin: 0 auto;

    @media (max-width: 1024px) {
      flex-direction: column-reverse;
      align-items: flex-end;
      gap: 16px;
      padding: 16px;

      & > button {
        width: 100%;
      }
    }
  `}
`;

export const TotalOrderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding-right: 9px;
`;

export const TotalText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: 700;
    text-transform: uppercase;
  `}
`;

export const TotalPrice = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-size: ${theme.font.sizes.large};
    font-weight: 700;
  `}
`;
