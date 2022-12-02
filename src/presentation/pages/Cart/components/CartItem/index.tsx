import { useDispatch, useSelector } from 'react-redux';

import CartProduct from '../../../../../@types/CartProduct';
import currencyFormatter from '../../../../formatters/currencyFormatter';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  selectCart,
} from '../../../../redux/Cart/Slice';
import CartQuantityController from '../CartQuantityController';
import { DeleteIcon, Price, Title } from '../CartTableRow/styles';
import * as Styled from './styles';

export type CartCardProps = {
  item: CartProduct;
};

const CartItem: React.FC<CartCardProps> = ({ item }) => {
  const { items } = useSelector(selectCart);
  const dispatch = useDispatch();

  const addedQuantity = items.find((product) => product.id === item.id)?.quantity;

  const handleClickMinus = () => {
    if (addedQuantity === 1) return;
    dispatch(decrementQuantity(item.id));
  };

  const handleClickPlus = () => {
    dispatch(incrementQuantity(item.id));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <Styled.Card>
      <Styled.MovieCover src={item.image} />
      <Styled.FirstColumn>
        <Title>{item.title}</Title>
        <CartQuantityController
          value={String(addedQuantity) || '0'}
          onClickMinus={handleClickMinus}
          onClickPlus={handleClickPlus}
        />
      </Styled.FirstColumn>
      <Styled.FirstColumn>
        <Styled.FirstLine>
          <Price>{currencyFormatter(item.price)}</Price>
          <DeleteIcon onClick={handleRemoveItem} />
        </Styled.FirstLine>
        <Styled.SecondLine>
          <Styled.SubtotalText>Subtotal</Styled.SubtotalText>
          <Price>{currencyFormatter(item.price)}</Price>
        </Styled.SecondLine>
      </Styled.FirstColumn>
    </Styled.Card>
  );
};

export default CartItem;
