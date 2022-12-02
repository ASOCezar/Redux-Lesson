import CartProduct from '../../../@types/CartProduct';
import MinusIcon from '../../assets/minus.svg';
import PlusIcon from '../../assets/plus.svg';
import currencyFormatter from '../../formatters/currencyFormatter';
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
      <Styled.QuantityControllerWrapper>
        <Styled.QuantityButton>
          <img src={MinusIcon} alt="Sinal de menos" />
        </Styled.QuantityButton>
        <Styled.QuantityInput type="number" value={item.quantity} />
        <Styled.QuantityButton>
          <img src={PlusIcon} alt="Sinal de mais" />
        </Styled.QuantityButton>
      </Styled.QuantityControllerWrapper>
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
