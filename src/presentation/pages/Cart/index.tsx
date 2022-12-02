import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import EmptyCartImage from '../../assets/empty-cart.png';
import currencyFormatter from '../../formatters/currencyFormatter';
import useWindowSize from '../../hooks/useWindowSize';
import { clear, selectCart } from '../../redux/Cart/Slice';
import Button from '../../Shared/Button';
import TextAndImageLayout from '../../Shared/TextAndImageLayout';
import CartItemsTable from './components/CartItemsTable';
import CartList from './components/CartList';
import * as Styled from './styles';

const Cart: React.FC = () => {
  const { width } = useWindowSize();
  const cartData = useSelector(selectCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hasProducts = !!cartData.items.length;
  const isDesktop = width >= 1024;

  const cartSubtotal = cartData.items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handleClickGoBack = () => {
    navigate('/');
  };

  const handleConfirmOrder = () => {
    dispatch(clear({}));
    navigate('/sucesso');
  };

  const renderCartContent = () => {
    if (isDesktop) {
      return <CartItemsTable data={cartData} />;
    }
    return <CartList data={cartData} />;
  };

  const renderCartActions = () => {
    return (
      <Styled.ActionWrapper>
        <Button onClick={handleConfirmOrder}>Finalizar Pedido</Button>
        <Styled.TotalOrderInfo>
          <Styled.TotalText>Total</Styled.TotalText>
          <Styled.TotalPrice>{currencyFormatter(cartSubtotal)}</Styled.TotalPrice>
        </Styled.TotalOrderInfo>
      </Styled.ActionWrapper>
    );
  };

  if (!hasProducts)
    return (
      <TextAndImageLayout
        text="Parece que não há nada por aqui :("
        image={EmptyCartImage}
        onGoBack={handleClickGoBack}
      />
    );

  return (
    <>
      <Styled.CartSection>
        {renderCartContent()}
        <Styled.Divider />
      </Styled.CartSection>
      {renderCartActions()}
    </>
  );
};

export default Cart;
