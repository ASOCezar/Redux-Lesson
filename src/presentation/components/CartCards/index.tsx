import styled, { css } from 'styled-components';

import Cart from '../../../@types/Cart';
import currencyFormatter from '../../formatters/currencyFormatter';
import { DeleteIcon, Price, Title } from '../CartItem/styles';
import CartQuantityController from '../CartQuantityController';

export type CartCardsProps = {
  data: Cart;
};

const CartCards: React.FC<CartCardsProps> = ({ data }) => {
  return (
    <Wrapper>
      {data.items.map((item) => (
        <Card key={item.id}>
          <MovieCover src={item.image} />
          <FirstColumn>
            <Title>{item.title}</Title>
            <CartQuantityController
              defaultValue="1"
              onClickMinus={() => console.log()}
              onClickPlus={() => console.log()}
            />
          </FirstColumn>
          <FirstColumn>
            <FirstLine>
              <Price>{currencyFormatter(item.price)}</Price>
              <DeleteIcon />
            </FirstLine>
            <SecondLine>
              <SubtotalText>Subtotal</SubtotalText>
              <Price>{currencyFormatter(item.price)}</Price>
            </SecondLine>
          </FirstColumn>
        </Card>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

const MovieCover = styled.img`
  width: 64px;
  height: 82px;
`;

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  justify-content: space-between;
`;

const FirstLine = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const SecondLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const SubtotalText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: 700;
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 3px;
  `}
`;
export default CartCards;
