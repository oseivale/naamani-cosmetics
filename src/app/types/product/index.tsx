import { Variant } from "../add-to-cart-button";




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