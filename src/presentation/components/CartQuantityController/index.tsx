import MinusIcon from '../../assets/minus.svg';
import PlusIcon from '../../assets/plus.svg';
import * as Styled from './styles';

export type CartQuantityControllerProps = {
  defaultValue: string;
  onClickMinus: () => void;
  onClickPlus: () => void;
};

const CartQuantityController: React.FC<CartQuantityControllerProps> = ({
  defaultValue,
  onClickMinus,
  onClickPlus,
}) => {
  return (
    <Styled.QuantityControllerWrapper>
      <Styled.QuantityButton onClick={onClickMinus}>
        <img src={MinusIcon} alt="Sinal de menos" />
      </Styled.QuantityButton>
      <Styled.QuantityInput type="number" value={defaultValue} />
      <Styled.QuantityButton onClick={onClickPlus}>
        <img src={PlusIcon} alt="Sinal de mais" />
      </Styled.QuantityButton>
    </Styled.QuantityControllerWrapper>
  );
};

export default CartQuantityController;
