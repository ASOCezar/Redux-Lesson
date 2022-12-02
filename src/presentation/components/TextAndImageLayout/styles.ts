import styled, { css } from 'styled-components';

export const EmptyCart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const Image = styled.img`
  width: fit-content;
  height: fit-content;
  object-fit: scale-down;
  margin-top: 32px;
`;

export const Divider = styled.hr`
  ${({ theme }) => css`
    height: 1.36px;
    width: 50%;
    background-color: ${theme.colors.darkGray};
    margin-bottom: 32px;
  `}
`;
