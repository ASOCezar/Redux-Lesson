import styled, { css } from 'styled-components';

import CartIcon from '../../assets/cart.svg';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Title>We Movies</Title>
        <CartGroup>
          <TextWrapper>
            <MyCartText>Meu Carrinho</MyCartText>
            <CartItemsCounter>0 itens</CartItemsCounter>
          </TextWrapper>
          <img src={CartIcon} alt="Ícone de sacola" />
        </CartGroup>
      </Header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  width: 100%;
  height: 74px;
  max-width: 960px;

  padding: 18px 12px 24.5px 10px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.contrastText};
    font-size: ${theme.font.sizes.medium};
    font-weight: 700;
  `}
`;

const CartGroup = styled.div`
  display: flex;
  gap: 9.33px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const MyCartText = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.contrastText};
    font-size: ${theme.font.sizes.small};
    font-weight: 600;
    line-height: 19px;
  `}
`;

const CartItemsCounter = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
  `}
`;

export default Home;
