import { Size, Variant } from "../add-to-cart-button";

export interface ProductInfo {
  id: string; // Unique identifier for the product
  name: string; // Name of the product
  basePrice?: number; // Optional base price for products without variants
  price?: number; // General price for products without variants
  availability?: number; // Number of items available in stock
  featured?: boolean; // Indicates if the product is featured
  category?: string; // Category of the product (e.g., 'body', 'face')
  description?: string; // Product description
  ingredients?: string; // List of ingredients as a string
  directions?: string; // Directions for use
  caution?: string; // Cautionary details
  scents?: string[]; // Optional array of scents
  variants?: Variant[]; // Array of variants (size, price, etc.)
  variantHeading?: string; // Optional heading for variant selection
  images?: string[]; // Array of image URLs
}

export interface ProductVariant {
  id: string; // Unique ID for the variant
  size: string; // Size of the variant (e.g., "2oz", "30ml")
  price: number; // Price of the variant
  scent: string;
}

/*

export interface Product {
  id: string; // Unique ID for the product
  name: string; // Name of the product
  price: number; // Base price of the product
  availability: number; // Number of items available in stock
  category: string; // Category of the product (e.g., "face", "body")
  description: string; // Product description
  ingredients: string; // List of ingredients
  directions: string; // Directions for use
  caution: string; // Cautionary information
  featured?: boolean; // Optional: Whether the product is featured
  scents?: string[] | null; // Optional: List of scents (null if none)
  sizes: Size[]
  variants: ProductVariant[]; // List of product variants
  variantHeading?: string; // Optional: Heading for variants (e.g., "Choose Your Scent")
  images: string[]; // List of image URLs
  productSingleSize?: string; // Optional: Single size for the product
}

*/

export type Product = {
    id: string;
    name: string;
    price: number; // Optional at the product level since price is variant-specific for some products
    availability: number;
    category: string;
    categories?: string[]; // Optional for products with multiple categories
    featured?: boolean;
    description: string;
    ingredients: string;
    directions: string;
    caution: string;
    scents: string[] | null; // Array of scent options or null if no scents
    sizes?: Array<{ size: string; price: number }>; // Optional for products with distinct size options
    variants: Array<{
      id: string;
      size: string;
      scent: string | null; // Null for products without scents
      price: number;
    }>;
    variantHeading?: string; // Optional, e.g., "Choose Your Scent"
    productSingleSize?: string; // Optional for single-size products
    images: string[]; // Array of image URLs
  };


export interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  id: string;
}

export type ProductFilterProps = {
  categories: string[]; // List of available categories
  onFilter: (category: string) => void; // Callback for category selection
};

export type ProductImageGalleryProps = {
  images: string[]; // Array of product images
  productName: string; // Name of the product
};

