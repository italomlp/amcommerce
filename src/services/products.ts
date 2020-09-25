import { AxiosResponse } from 'axios';
import baseApi from './baseApi';

import { Product } from '../models/Product';

type ListProductsRequest = {
  searchText?: string;
  orderBy?: 'price_asc' | 'price_desc';
  page?: number;
};

export const listProducts = ({
  orderBy,
  page,
  searchText,
}: ListProductsRequest = {}): Promise<AxiosResponse<Product[]>> => {
  const params = {
    _limit: 10,
  };

  if (page && page !== 1) {
    Object.assign(params, { _page: page });
  }

  if (orderBy) {
    Object.assign(params, { _sort: 'price' });
    if (orderBy === 'price_asc') {
      Object.assign(params, { _order: 'asc' });
    } else {
      Object.assign(params, { _order: 'desc' });
    }
  }

  if (searchText) {
    Object.assign(params, { title_like: searchText });
  }

  return baseApi.get('/products', {
    params,
  });
};
