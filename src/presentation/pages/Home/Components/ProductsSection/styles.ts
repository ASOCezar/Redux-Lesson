import styled from 'styled-components';

export const ProductsSection = styled.ul`
  width: 100%;
  height: 100%;
  max-width: 960px;
  margin: 24px auto;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-template-rows: repeat(auto-fill, 305px);
  gap: 16px;
`;
