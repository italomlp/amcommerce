import { Product } from './Product';

export interface RouteParams
  extends Record<string, Record<string, unknown> | undefined> {
  ProductDetail: {
    product: Product;
  };
}
