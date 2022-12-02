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
import * as Styled from './styles';

export type CartItemProps = {
  item: CartProduct;
};

const CartTableRow: React.FC<CartItemProps> = ({ item }) => {
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

  const renderMovieCell = () => (
    <Styled.TableCell>
      <Styled.MovieInfo>
        <Styled.MovieCover src={item.image} alt="" />
        <Styled.Text>
          <Styled.Title>{item.title}</Styled.Title>
          <Styled.Price>{currencyFormatter(item.price)}</Styled.Price>
        </Styled.Text>
      </Styled.MovieInfo>
    </Styled.TableCell>
  );

  const renderQuantityControllerCell = () => (
    <Styled.TableCell>
      <CartQuantityController
        value={String(addedQuantity) || '0'}
        onClickMinus={handleClickMinus}
        onClickPlus={handleClickPlus}
      />
    </Styled.TableCell>
  );

  const renderSubtotalCell = () => (
    <Styled.TableCell>
      <Styled.Subtotal>{currencyFormatter(item.price)}</Styled.Subtotal>
    </Styled.TableCell>
  );

  const renderDeleteCell = () => (
    <Styled.TableCell style={{ textAlign: 'right' }}>
      <Styled.DeleteIcon onClick={handleRemoveItem} />
    </Styled.TableCell>
  );

  return (
    <tr>
      {renderMovieCell()}
      {renderQuantityControllerCell()}
      {renderSubtotalCell()}
      {renderDeleteCell()}
    </tr>
  );
};

export default CartTableRow;
