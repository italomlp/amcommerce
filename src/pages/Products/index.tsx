import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { Header, ProductCard } from '../../components';
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
      <Header title="Produtos" />
      <FlatList
        data={loadedProducts}
        renderItem={({ item: product }) => <ProductCard product={product} />}
        keyExtractor={product => String(product.id)}
      />
    </SafeAreaView>
  );
};

export default Products;
