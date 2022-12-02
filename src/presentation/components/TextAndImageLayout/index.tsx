import Button from '../Button';
import * as Styled from './styles';

type TextAndImageLayoutProps = {
  text: string;
  image: string;
  onGoBack: () => void;
};

const TextAndImageLayout: React.FC<TextAndImageLayoutProps> = ({
  image,
  onGoBack,
  text,
}) => {
  return (
    <Styled.EmptyCart>
      <Styled.Text>{text}</Styled.Text>
      <Styled.Image src={image} alt="" />
      <Styled.Divider />
      <Button onClick={onGoBack}>Voltar</Button>
    </Styled.EmptyCart>
  );
};

export default TextAndImageLayout;
