"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { ProductItem, Size } from "../types/add-to-cart-button";

interface CartItem {
  id: string;
  name: string;
  size: string;
  scent: string | null;
  price: number | string;
  quantity: number;
  image: string;
  variantId?: string;
}

type AddToCart = (
  product: ProductItem,
  selectedSize: Size | null,
  selectedScent: string | null,
  quantity: number
) => void;

type CartContextType = {
  cart: CartItem[];
  size: string;
  scent: string;
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


  // const addToCart: AddToCart = (
  //   product,
  //   selectedVariantId: string | null,
  //   quantity: number = 1,
  //   selectedScent: string | null = null
  // ) => {
  //   console.log('---product---', product)
  //   console.log('---selectedVariantId---', selectedVariantId)
    

  //   const selectedVariant = product?.variants?.find(
  //     (variant) => variant.id === selectedVariantId
  //   );

  //   // const selectedVariant = product?.variants?.find(
  //   //   (variant) =>{ 
  //   //     console.log('-----hiii', `${variant.id}-${selectedScent?.replace(/\s+/g, "-").toLowerCase()}`)
  //   //     return `${variant.id}-${selectedScent?.replace(/\s+/g, "-").toLowerCase().trim()}` === selectedVariantId
  //   // }
  //   // );

  //   // if (!selectedVariant) {
  //   //   console.error("Selected variant not found!");
  //   //   return;
  //   // }

  //   if (!selectedVariant) {
  //     console.error("Selected variant not found!");
  //     return;
  //   }

  //   setCart((prevCart) => {
  //     // Check if the same variant and scent already exist in the cart
  //     const existingItem = prevCart.find(
  //       (item) =>
  //         item.id === product.id &&
  //         item.size === selectedVariant.size &&
  //         item.scent === selectedScent
  //     );

  //     if (existingItem) {
  //       // Update the quantity if the item already exists
  //       return prevCart.map((item) =>
  //         item.id === product.id &&
  //         item.size === selectedVariant.size &&
  //         item.scent === selectedScent
  //           ? { ...item, quantity: item.quantity + quantity }
  //           : item
  //       );
  //     }

  //     // Add a new item if it doesn't exist
  //     const newItem: CartItem = {
  //       id: selectedVariant?.id ? selectedVariant?.id : product.id,
  //       name: product.name,
  //       size: selectedVariant.size,
  //       scent: selectedScent,
  //       price: selectedVariant.price,
  //       quantity: quantity,
  //       image: product.images ? product.images[0] : "",
  //       variantId: selectedVariant.id || ''
  //     };

  //     return [...prevCart, newItem];
  //   });

  //   // Optionally open the cart drawer (uncomment if needed)
  //   // setIsCartDrawerOpen(true);
  // };
  
  /*
  const addToCart: AddToCart = (
  product,
  selectedSize: string | null, // Pass the selected size
  selectedScent: string | null, // Pass the selected scent
  quantity: number = 1
) => {
  console.log("---product---", product);
  console.log("---selectedSize---", selectedSize);
  console.log("---selectedScent---", selectedScent);

  // Find the matching variant based on selected size and scent
  const selectedVariant = product?.variants?.find(
    (variant) =>
      variant.size === selectedSize && variant.scent === selectedScent
  );

  if (!selectedVariant) {
    console.error("Selected variant not found! Ensure size and scent are selected.");
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
      id: selectedVariant.id, // Use the variant ID for unique identification
      name: product.name,
      size: selectedVariant.size,
      scent: selectedScent,
      price: selectedVariant.price,
      quantity: quantity,
      image: product.images ? product.images[0] : "",
      variantId: selectedVariant.id, // Variant ID for further processing
    };

    return [...prevCart, newItem];
  });

  // Optionally open the cart drawer (uncomment if needed)
  // setIsCartDrawerOpen(true);
};
  
  */

const addToCart: AddToCart = (
  product,
  selectedSize: Size | null, // Pass the selected size
  selectedScent: string | null, // Pass the selected scent
  quantity: number = 1
) => {
  console.log("---product---", product);
  console.log("---selectedSize---", selectedSize);
  console.log("---selectedScent---", selectedScent);

  // Find the matching variant based on selected size and scent
  const selectedVariant = product?.variants?.find(
    (variant) =>{
      console.log('variant from selected variant function', variant)
     return variant.size === selectedSize?.size && variant.scent === selectedScent
    }
  );

  if (!selectedVariant) {
    console.error("Selected variant not found! Ensure size and scent are selected.");
    return;
  }

  setCart((prevCart) => {
    // Check if an item with the same ID exists in the cart
    const existingItem = prevCart.find(
      (item) => item.id === selectedVariant.id
    );

    if (existingItem) {
      // Update the quantity of the existing item
      return prevCart.map((item) =>
        item.id === selectedVariant.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    }

    // Add a new item if it doesn't exist
    const newItem: CartItem = {
      id: selectedVariant.id, // Use the variant ID for unique identification
      name: product.name,
      size: selectedVariant.size,
      scent: selectedScent,
      price: selectedVariant.price,
      quantity: quantity,
      image: product.images ? product.images[0] : "",
      variantId: selectedVariant.id, // Variant ID for further processing
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

  const totalAmount =
    cart &&
    cart.reduce(
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
