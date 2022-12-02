import { useDispatch, useSelector } from 'react-redux';

import Product from '../../../../../@types/Product';
import ShoppingCart from '../../../../assets/shopping-cart.svg';
import currencyFormatter from '../../../../formatters/currencyFormatter';
import { addToCart, selectCart } from '../../../../redux/Cart/Slice';
import { useProductsQuery } from '../../../../services/productsApi';
import { theme } from '../../../../styles/theme';
import * as Styled from './styles';

export type CardProps = {
  item: Product;
};

const Card: React.FC<CardProps> = ({ item }) => {
  const dispatch = useDispatch();
  const { data: products } = useProductsQuery();

  const cart = useSelector(selectCart);

  const handleAddProduct = () => {
    const addedProduct = products?.find((product) => product.id === item.id);
    dispatch(addToCart(addedProduct));
  };

  const hasAddedItem = cart.items.find((product) => product.id === item.id);
  const addedQuantity = hasAddedItem?.quantity;

  return (
    <Styled.Wrapper>
      <Styled.Cover src={item.image}></Styled.Cover>
      <Styled.Title>{item.title}</Styled.Title>
      <Styled.Price>{currencyFormatter(item.price)}</Styled.Price>
      <Styled.Button
        shadowColor={hasAddedItem ? 'rgba(3, 155, 0, 0.25)' : 'inherit'}
        backgroundColor={hasAddedItem ? theme.colors.success : theme.colors.lightBlue}
        onClick={() => handleAddProduct()}
      >
        <Styled.CartInfo>
          <img src={ShoppingCart} alt="" />
          {addedQuantity || 0}
        </Styled.CartInfo>
        <Styled.ButtonText>Adicionar ao carrinho</Styled.ButtonText>
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default Card;
