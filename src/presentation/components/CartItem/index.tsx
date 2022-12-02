import CartProduct from '../../../@types/CartProduct';
import currencyFormatter from '../../formatters/currencyFormatter';
import CartQuantityController from '../CartQuantityController';
import * as Styled from './styles';

export type CartItemProps = {
  item: CartProduct;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
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
        defaultValue="1"
        onClickMinus={() => console.log()}
        onClickPlus={() => console.log()}
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
      <Styled.DeleteIcon />
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

export default CartItem;
