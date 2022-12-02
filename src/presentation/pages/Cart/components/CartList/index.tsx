import Cart from '../../../../../@types/Cart';
import CartProduct from '../../../../../@types/CartProduct';
import CartItem from '../CartItem';
import * as Styled from './styles';

export type CartCardsProps = {
  data: Cart;
};

const renderCards = (item: CartProduct) => <CartItem item={item} />;

const CartList: React.FC<CartCardsProps> = ({ data }) => (
  <Styled.Wrapper>{data.items.map(renderCards)}</Styled.Wrapper>
);

export default CartList;
