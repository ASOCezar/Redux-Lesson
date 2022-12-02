import CartType from '../../../@types/Cart';
import Button from '../../components/Button';
import CartItemsTable from '../../components/CartItemsTable';
import currencyFormatter from '../../formatters/currencyFormatter';
import * as Styled from './styles';

const fakeCart: CartType = {
  items: [
    {
      id: 1,
      title: 'Viúva Negra',
      price: 9.99,
      image: 'https://www.imagemhost.com.br/images/2022/07/10/viuva-negra.png',
      quantity: 1,
    },
    {
      id: 2,
      title: 'Viúva Negra',
      price: 9.99,
      image: 'https://www.imagemhost.com.br/images/2022/07/10/viuva-negra.png',
      quantity: 1,
    },
    {
      id: 3,
      title: 'Viúva Negra',
      price: 9.99,
      image: 'https://www.imagemhost.com.br/images/2022/07/10/viuva-negra.png',
      quantity: 1,
    },
    {
      id: 4,
      title: 'Viúva Negra',
      price: 9.99,
      image: 'https://www.imagemhost.com.br/images/2022/07/10/viuva-negra.png',
      quantity: 1,
    },
    {
      id: 5,
      title: 'Viúva Negra',
      price: 9.99,
      image: 'https://www.imagemhost.com.br/images/2022/07/10/viuva-negra.png',
      quantity: 1,
    },
    {
      id: 6,
      title: 'Viúva Negra',
      price: 9.99,
      image: 'https://www.imagemhost.com.br/images/2022/07/10/viuva-negra.png',
      quantity: 1,
    },
  ],
};

const Cart: React.FC = () => {
  return (
    <>
      <Styled.CartSection>
        <CartItemsTable cart={fakeCart} />
        <Styled.Divider />
      </Styled.CartSection>
      <Styled.ActionWrapper>
        <Button>Finalizar Pedido</Button>
        <Styled.TotalOrderInfo>
          <Styled.TotalText>Total</Styled.TotalText>
          <Styled.TotalPrice>{currencyFormatter(29.99)}</Styled.TotalPrice>
        </Styled.TotalOrderInfo>
      </Styled.ActionWrapper>
    </>
  );
};

export default Cart;
