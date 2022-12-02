import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CartIcon from '../../assets/cart.svg';
import { selectCart } from '../../redux/Cart/Slice';
import * as Styled from './styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const cart = useSelector(selectCart);
  const cartItemsQuantity = cart.items.length;

  const handleClickCart = () => {
    navigate('/carrinho');
  };

  const handleClickLogo = () => {
    navigate('/');
  };

  return (
    <Styled.Wrapper>
      <Styled.Title onClick={handleClickLogo}>We Movies</Styled.Title>
      <Styled.CartGroup onClick={handleClickCart}>
        <Styled.TextWrapper>
          <Styled.MyCartText>Meu Carrinho</Styled.MyCartText>
          <Styled.CartItemsCounter>
            {cartItemsQuantity} {cartItemsQuantity === 1 ? 'item' : 'itens'}
          </Styled.CartItemsCounter>
        </Styled.TextWrapper>
        <img src={CartIcon} alt="Ícone de sacola" />
      </Styled.CartGroup>
    </Styled.Wrapper>
  );
};

export default Header;
