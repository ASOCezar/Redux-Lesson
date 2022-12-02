import styled, { css } from 'styled-components';

export const QuantityControllerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const QuantityButton = styled.button`
  ${() => css`
    width: 18px;
    height: 18px;

    border-radius: 50%;
    border: none;
    background-color: transparent;
  `}
`;

export const QuantityInput = styled.input`
  ${({ theme }) => css`
    height: 26px;
    width: 62px;
    border-radius: 4px;
    padding: 3.5px 16px;
    outline: none;

    border: 1px solid ${theme.colors.lightGray};
  `}
`;
