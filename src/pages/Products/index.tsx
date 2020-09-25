import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Header, ProductsList } from '../../components';
import { Product } from '../../models/Product';
import { listProducts } from '../../services/products';

// import { Container } from './styles';

const Products: React.FC = () => {
  const [loadedProducts, setLoadedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await listProducts();
      const products = response.data;
      setLoadedProducts(products);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <SafeAreaView>
      <ProductsList
        products={loadedProducts}
        topComponent={<Header title="Produtos" />}
      />
    </SafeAreaView>
  );
};

export default Products;
