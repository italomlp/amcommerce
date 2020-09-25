import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Header, ProductsList } from '../../components';
import { Product } from '../../models/Product';
import { listProducts } from '../../services/products';

import {
  SearchContainer,
  Button,
  Input,
  Loading,
  ErrorText,
  OrderByButton,
  OrderByButtonText,
  OrderByContainer,
  OrderByDescription,
  OrderByLineSeparator,
  LoadMoreButton,
  LoadMoreButtonContainer,
} from './styles';

const Products: React.FC = () => {
  const [loadedProducts, setLoadedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [orderBy, setOrderBy] = useState<'price_asc' | 'price_desc' | ''>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState('');

  const loadProducts = useCallback(
    async (page?: number) => {
      try {
        if (page) {
          setPageLoading(true);
        } else {
          setCurrentPage(1);
          setLoading(true);
        }
        const response = await listProducts({
          searchText,
          orderBy: orderBy || undefined,
          page,
        });
        setLoadedProducts(prevProducts =>
          page ? [...prevProducts, ...response.data] : response.data,
        );
      } catch (err) {
        console.log('error', err);
        setError(
          'Ocorreu um erro ao carregar os produtos :(\nPor favor, tente novamente em instantes',
        );
      } finally {
        setLoading(false);
        setPageLoading(false);
      }
    },
    [searchText, orderBy],
  );

  useEffect(() => {
    loadProducts();
  }, [orderBy]);

  const isActiveOrderByState = useCallback(
    order => {
      return order === orderBy;
    },
    [orderBy],
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Produtos" />
      <ProductsList
        products={loadedProducts}
        topComponent={
          <>
            <SearchContainer>
              <Input
                placeholder="Digite aqui sua busca"
                value={searchText}
                onChangeText={text => setSearchText(text)}
              />
              <Button title="Buscar" onPress={() => loadProducts()} />
            </SearchContainer>
            <OrderByContainer>
              <OrderByDescription>Ordenar por: </OrderByDescription>
              <OrderByButton
                selected={isActiveOrderByState('')}
                onPress={() => setOrderBy('')}
              >
                <OrderByButtonText selected={isActiveOrderByState('')}>
                  Nenhum
                </OrderByButtonText>
              </OrderByButton>
              <OrderByLineSeparator />
              <OrderByButton
                selected={isActiveOrderByState('price_desc')}
                onPress={() => setOrderBy('price_desc')}
              >
                <OrderByButtonText
                  selected={isActiveOrderByState('price_desc')}
                >
                  Maior Preço
                </OrderByButtonText>
              </OrderByButton>
              <OrderByLineSeparator />
              <OrderByButton
                selected={isActiveOrderByState('price_asc')}
                onPress={() => setOrderBy('price_asc')}
              >
                <OrderByButtonText selected={isActiveOrderByState('price_asc')}>
                  Menor Preço
                </OrderByButtonText>
              </OrderByButton>
            </OrderByContainer>
            {!!error && <ErrorText>{error}</ErrorText>}
            {loading && <Loading />}
          </>
        }
        ListFooterComponent={() => (
          <>
            {pageLoading ? (
              <Loading />
            ) : (
              <LoadMoreButtonContainer>
                <LoadMoreButton
                  title="Carregar mais"
                  onPress={() => {
                    const nextPage = currentPage + 1;
                    loadProducts(nextPage);
                    setCurrentPage(nextPage);
                  }}
                />
              </LoadMoreButtonContainer>
            )}
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Products;
