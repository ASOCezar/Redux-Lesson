import * as Styled from './styles';

export interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <Styled.Button onClick={onClick}>{children}</Styled.Button>
);

export default Button;
