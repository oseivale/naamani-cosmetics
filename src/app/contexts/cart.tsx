"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { ProductItem } from "../types/add-to-cart-button";

// export type CartItem = {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
//   size?: string;
//   scent?: string;
// };

// interface Product {
//   id: string;
//   name: string;
//   basePrice: number; // Base price for the product
//   availability: number;
//   featured: boolean;
//   category: string;
//   description: string;
//   scents?: string[]; // Optional array of scents
//   variants: Variant[]; // Array of variants
//   images: string[];
// }

// interface Variant {
//   id: string;
//   size: string;
//   price: number;
// }

// interface Product {
//   id: string;
//   name: string;
//   basePrice?: number;
//   price?: number;
//   availability?: number;
//   featured?: boolean;
//   category?: string;
//   description?: string;
//   ingredients?: string;
//   directions?: string;
//   caution?: string;
//   scents?: string[];
//   variants?: Variant[];
//   variantHeading?: string; 
//   images?: string[];
// }

// interface Variant {
//   id: string;
//   size: string;
//   price: number;
// }

interface CartItem {
  id: string;
  name: string;
  size: string;
  scent: string | null;
  price: number | string;
  quantity: number;
  image: string;
}

type AddToCart = (
  product: ProductItem,
  selectedVariantId: string| null,
  quantity?: number,
  selectedScent?: string | null
) => void;

type CartContextType = {
  cart: CartItem[];
  size: string;
  scent: string;
  // addToCart: (item: CartItem) => void;
  addToCart: AddToCart;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  triggerCartDrawerOpen: () => void;
  triggerCartDrawerClose: () => void;
  isCartDrawerOpen: boolean;
  totalAmount: number;
  totalItems: number;
  quantity: number;
  // isDisabled: boolean; 
  // handleButtonClick: () => void;
  handleIncrease: () => void;
  handleDecrease: () => void;
  handleQuantityChange: (quantity: number) => void;
  handleSizeChange: (size: string) => void;
  handleScentChange: (scent: string) => void;
  updateLineItemQuantity: (
    id: string,
    quantity: number,
    size?: string,
    scent?: string | null
  ) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [scent, setScent] = useState("");

  const handleQuantityChange = (quantity: number) => {
    setQuantity(quantity);
  };

  const handleSizeChange = (size: string) => {
    setSize(size);
  };

  // const handleScentChange = (scent: string) => {
  //   setScent(scent);
  // };

  const handleScentChange = (scent: string) => {
    setScent((currentScent) => (currentScent === scent ? "" : scent));
  };

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // const addToCart = (item: CartItem) => {
  //   setCart((prevCart) => {
  //     const existingItem = prevCart.find((i) => i.size === item.size && i.scent === item.scent);
  //     if (existingItem) {
  //       return prevCart.map((i) =>
  //         i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
  //       );
  //     }
  //     return [...prevCart, item];
  //   });

  //   // setIsCartDrawerOpen(true)
  // };



  // const handleButtonClick = () => {
  
  //   if (isDisabled) {
  //     console.log('isDisabled', isDisabled)
  //     alert("Button is disabled. You cannot perform this action!");
  //   } else {
  //     console.log("Button clicked!");
  //   }
  // };

  // const addToCart = (item: CartItem) => {
 

  //   setCart((prevCart) => {

  //     // Check for an existing item with the same size and scent
  //     const existingItem = prevCart.find(
  //       (i) =>
  //         i.id === item.id &&
  //         i.size === item.size &&
  //         (i.scent === item.scent || i.scent === undefined)
  //     );

  //     if (existingItem) {
  //       // If item already exists in the cart, update its quantity
  //       return prevCart.map((i) =>
  //         i.id === existingItem.id &&
  //         i.size === existingItem.size &&
  //         (i.scent === existingItem.scent || i.scent === undefined)
  //           ? { ...i, quantity: i.quantity + item.quantity }
  //           : i
  //       );
  //     }
  
  //     // Otherwise, add a new line item to the cart
  //     return [...prevCart, item];
  //   });

  //   // Optionally open the cart drawer (uncomment if needed)
  //   // setIsCartDrawerOpen(true);
  // };

  const addToCart: AddToCart = (product, selectedVariantId: string | null, quantity: number = 1, selectedScent: string | null = null) => {
    const selectedVariant = product?.variants?.find(
      (variant) => variant.id === selectedVariantId
    );
  
    if (!selectedVariant) {
      console.error("Selected variant not found!");
      return;
    }
  
    setCart((prevCart) => {
      // Check if the same variant and scent already exist in the cart
      const existingItem = prevCart.find(
        (item) =>
          item.id === product.id &&
          item.size === selectedVariant.size &&
          item.scent === selectedScent
      );
  
      if (existingItem) {
        // Update the quantity if the item already exists
        return prevCart.map((item) =>
          item.id === product.id &&
          item.size === selectedVariant.size &&
          item.scent === selectedScent
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
  
      // Add a new item if it doesn't exist
      const newItem: CartItem = {
        id: product.id,
        name: product.name,
        size: selectedVariant.size,
        scent: selectedScent,
        price: selectedVariant.price,
        quantity: quantity,
        image: product.images ? product.images[0]: ''
      };
  
      return [...prevCart, newItem];
    });
  
    // Optionally open the cart drawer (uncomment if needed)
    // setIsCartDrawerOpen(true);
  };
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  const totalAmount = cart && cart.reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (sum, item: any) => sum + item.price * item.quantity,
    0
  );

  const triggerCartDrawerClose = () => {
    setIsCartDrawerOpen(false);
  };

  const triggerCartDrawerOpen = () => {
    setIsCartDrawerOpen(true);
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    handleQuantityChange(newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      handleQuantityChange(newQuantity);
    }
  };

  // Update the quantity of a specific line item
  const updateLineItemQuantity = (
    id: string,

    quantity: number,
    size?: string,
    scent?: string | null
  ) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.size === size && item.scent === scent
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Total number of items in the cart
  const totalItems = cart && cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        size,
        scent,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        triggerCartDrawerOpen,
        triggerCartDrawerClose,
        isCartDrawerOpen,
        totalAmount,
        totalItems,
        // isDisabled,
        // handleButtonClick,
        handleDecrease,
        handleIncrease,
        quantity,
        handleQuantityChange,
        handleSizeChange,
        handleScentChange,
        updateLineItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
