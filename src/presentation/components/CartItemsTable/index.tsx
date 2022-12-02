import Cart from '../../../@types/Cart';
import CartProduct from '../../../@types/CartProduct';
import CartItem from '../CartItem';
import * as Styled from './styles';

export type CartItemsTableProps = {
  cart: Cart;
};

const renderItem = (item: CartProduct) => <CartItem item={item} key={item.id} />;

const CartItemsTable: React.FC<CartItemsTableProps> = ({ cart }) => {
  return (
    <Styled.CartItemsTable>
      <thead>
        <tr>
          <Styled.HeaderCell>Produto</Styled.HeaderCell>
          <Styled.HeaderCell>QTD</Styled.HeaderCell>
          <Styled.HeaderCell>Subtotal</Styled.HeaderCell>
          <th></th>
        </tr>
      </thead>
      <tbody>{cart.items.map(renderItem)}</tbody>
    </Styled.CartItemsTable>
  );
};

export default CartItemsTable;
