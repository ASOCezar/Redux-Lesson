import Product from '../../../../../@types/Product';
import { useProductsQuery } from '../../../../services/productsApi';
import ProductsCard from '../ProductsCard';
import * as Styled from './styles';

const renderCard = (product: Product) => <ProductsCard item={product} key={product.id} />;
const ProductsSection: React.FC = () => {
  const { data } = useProductsQuery();

  return <Styled.ProductsSection>{data?.map(renderCard)}</Styled.ProductsSection>;
};

export default ProductsSection;
