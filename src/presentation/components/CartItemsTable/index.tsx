import Cart from '../../../@types/Cart';
import CartProduct from '../../../@types/CartProduct';
import CartItem from '../CartItem';
import * as Styled from './styles';

export type CartItemsTableProps = {
  data: Cart;
};

const renderItem = (item: CartProduct) => <CartItem item={item} key={item.id} />;

const CartItemsTable: React.FC<CartItemsTableProps> = ({ data }) => {
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
      <tbody>{data.items.map(renderItem)}</tbody>
    </Styled.CartItemsTable>
  );
};

export default CartItemsTable;
