export type Variant = {
  id: string;
  size: string;
  price: number;
  scent:  string | null;
};

export interface Size {
    size: string;
    price: number;
}

export type ProductItem = {
  id: string;
  name: string;
  price: number; // Base price, but specific to products without multiple variants
  availability: number; // Stock availability
  category: string;
  description: string;
  ingredients: string;
  directions: string;
  caution: string;
  sizes?: Size[]; // Optional, some products may not have sizes
  scents: string[] | null; // Null for products without scent options
  variants: Variant[]; // Required for products with multiple variants
  variantId?: string; // Optional, populated for selected variants in cart
  quantity?: number; // Optional, typically used in cart context
  size?: string; // Optional, populated for selected variants in cart
  scent?: string; // Optional, populated for selected variants in cart
  images: string[]; // Array to handle multiple images
  featured?: boolean; // Optional, flag to mark featured products
  productSingleSize?: string; // Optional, for products with a single size
  variantHeading?: string; // Optional, heading for variant selection
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
    variantId?: string;
  }