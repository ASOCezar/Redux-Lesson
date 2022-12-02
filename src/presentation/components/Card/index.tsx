import Product from '../../../@types/Product';
import ShoppingCart from '../../assets/shopping-cart.svg';
import currencyFormatter from '../../formatters/currencyFormatter';
import { theme } from '../../styles/theme';
import * as Styled from './styles';

export type CardProps = {
  item: Product;
};

const Card: React.FC<CardProps> = ({ item }) => {
  const hasAddedItem = false;

  return (
    <Styled.Wrapper>
      <Styled.Cover src={item.image}></Styled.Cover>
      <Styled.Title>{item.title}</Styled.Title>
      <Styled.Price>{currencyFormatter(item.price)}</Styled.Price>
      <Styled.Button
        backgroundColor={hasAddedItem ? theme.colors.success : theme.colors.lightBlue}
      >
        <Styled.CartInfo>
          <img src={ShoppingCart} alt="" />0
        </Styled.CartInfo>
        <Styled.ButtonText>Adicionar ao carrinho</Styled.ButtonText>
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default Card;
