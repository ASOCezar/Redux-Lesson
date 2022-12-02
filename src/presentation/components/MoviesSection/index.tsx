import Product from '../../../@types/Product';
import data from '../../../server/data.json';
import Card from '../Card';
import * as Styled from './styles';

const renderCard = (product: Product) => <Card item={product} key={product.id} />;

const MoviesSection: React.FC = () => (
  <Styled.MoviesSection>{data.products.map(renderCard)}</Styled.MoviesSection>
);

export default MoviesSection;
