"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
  scent?: string;
};

type CartContextType = {
  cart: CartItem[];
  size: string;
  scent: string;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  triggerCartDrawerOpen: () => void;
  triggerCartDrawerClose: () => void;
  isCartDrawerOpen: boolean;
  totalAmount: number;
  totalItems: number;
  quantity: number;
  isDisabled: boolean; 
  handleButtonClick: () => void;
  handleIncrease: () => void;
  handleDecrease: () => void;
  handleQuantityChange: (quantity: number) => void;
  handleSizeChange: (size: string) => void;
  handleScentChange: (scent: string) => void;
  updateLineItemQuantity: (
    id: string,
    quantity: number,
    size?: string,
    scent?: string
  ) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [scent, setScent] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

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



  const handleButtonClick = () => {
  
    if (isDisabled) {
      console.log('isDisabled', isDisabled)
      alert("Button is disabled. You cannot perform this action!");
    } else {
      console.log("Button clicked!");
    }
  };

  const addToCart = (item: CartItem) => {
 

    setCart((prevCart) => {

      // Check for an existing item with the same size and scent
      const existingItem = prevCart.find(
        (i) =>
          i.id === item.id &&
          i.size === item.size &&
          (i.scent === item.scent || i.scent === undefined)
      );

      if (existingItem) {
        // If item already exists in the cart, update its quantity
        return prevCart.map((i) =>
          i.id === existingItem.id &&
          i.size === existingItem.size &&
          (i.scent === existingItem.scent || i.scent === undefined)
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
  
      // Otherwise, add a new line item to the cart
      return [...prevCart, item];
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
    (sum, item) => sum + item.price * item.quantity,
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
    scent?: string
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
        isDisabled,
        handleButtonClick,
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
