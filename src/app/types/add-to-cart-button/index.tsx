export type Variant = {
  id: string;
  size: string;
  price: number;
};

export type ProductItem = {
  id: string;
  name: string;
  price: number | undefined;
  variants?: Variant[]; // Optional, to handle products without variants
  scents: string[] | null;// Optional, to handle products without scents
  images?: string[]; 
};

export type AddToCartButtonProps = {
  product: ProductItem;
};

export interface CartItem {
    id: string;
    name: string;
    size?: string;
    scent?: string | null;
    price: number | string;
    quantity: number;
    image: string;
  }