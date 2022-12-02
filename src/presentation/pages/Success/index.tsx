import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import SuccessImg from '../../assets/success.png';
import TextAndImageLayout from '../../components/TextAndImageLayout';

const Sucess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SuccessSection>
      <TextAndImageLayout
        text="Compra realizada com sucesso!"
        image={SuccessImg}
        onGoBack={() => navigate('/')}
      />
    </SuccessSection>
  );
};

export const SuccessSection = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    background-color: ${theme.colors.contrastText};

    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
  `}
`;

export default Sucess;
