import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.contrastText};
    max-width: 960px;
    border-radius: 4px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-block: 64px;
    margin: 0 auto;

    @media (max-width: 960px) {
      height: 100%;
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-weight: 700;
    font-size: ${theme.font.sizes.medium};

    @media (max-width: 960px) {
      max-width: 210px;
      text-align: center;
    }
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

    @media (max-width: 960px) {
      width: 100%;
    }
  `}
`;
