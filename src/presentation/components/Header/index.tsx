import CartIcon from '../../assets/cart.svg';
import * as Styled from './styles';

const Header: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>We Movies</Styled.Title>
      <Styled.CartGroup>
        <Styled.TextWrapper>
          <Styled.MyCartText>Meu Carrinho</Styled.MyCartText>
          <Styled.CartItemsCounter>0 itens</Styled.CartItemsCounter>
        </Styled.TextWrapper>
        <img src={CartIcon} alt="Ícone de sacola" />
      </Styled.CartGroup>
    </Styled.Wrapper>
  );
};

export default Header;
