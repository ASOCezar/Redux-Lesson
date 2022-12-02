import styled from 'styled-components';

import { useProductsQuery } from '../../services/productsApi';
import Spinner from '../../Shared/Spinner';
import ProductsSection from './Components/ProductsSection';

const Home: React.FC = () => {
  const { isFetching } = useProductsQuery();

  if (isFetching) return <Spinner />;

  return (
    <Wrapper>
      <ProductsSection />
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

export default Home;
