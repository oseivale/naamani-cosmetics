export type QuantitySelectorProps = {
  onQuantityChange: (quantity: number) => void; // Callback for parent to get the quantity
  initialQuantity?: number; // Optional initial quantity
  quantityTest: number;
};
