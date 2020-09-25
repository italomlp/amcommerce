export interface Image {
  uri: string;
  main?: boolean;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discount: number;
  rating: number;
  images: Image[];
}
