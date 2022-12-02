import styled, { css } from 'styled-components';

import TrashIcon from '../../assets/trash.svg';

export const TableCell = styled.td`
  padding-top: 21px;
  width: fit-content;
`;

export const MovieCover = styled.img`
  width: 89px;
  height: 114px;
`;

export const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 52px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.background};
    font-weight: 700;
  `}
`;

export const Price = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.background};
    font-weight: 700;
  `}
`;

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

export const Subtotal = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-size: ${theme.font.sizes.small};
    font-weight: 700;
  `}
`;

export const DeleteIcon = styled.button`
  background-image: url(${TrashIcon});
  background-repeat: no-repeat;
  background-position-x: right;

  width: 18px;
  height: 18px;
  object-fit: contain;
  border: none;
  background-color: transparent;
`;
