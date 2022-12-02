import styled from 'styled-components';

import MoviesSection from '../../components/MoviesSection';
const Home: React.FC = () => {
  return (
    <Wrapper>
      <MoviesSection />
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default Home;
