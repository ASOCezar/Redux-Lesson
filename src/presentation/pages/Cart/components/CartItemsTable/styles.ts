import styled, { css } from 'styled-components';

export const CartItemsTable = styled.table`
  width: 100%;
`;

export const HeaderCell = styled.th`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: 700;
    text-align: left;
    text-transform: uppercase;
  `}
`;
