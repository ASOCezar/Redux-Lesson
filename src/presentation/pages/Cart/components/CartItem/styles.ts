import styled, { css } from 'styled-components';

export const Card = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
`;

export const MovieCover = styled.img`
  width: 64px;
  height: 82px;
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  justify-content: space-between;
`;

export const FirstLine = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const SecondLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SubtotalText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: 700;
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 3px;
  `}
`;
