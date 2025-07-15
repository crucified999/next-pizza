import { selectTotalCounter, selectTotalPrice } from "@/shared/services/slices/nextPizzaSlice";
import { CartButtonUI } from "../ui/cart-button/cart-button";
import { useSelector } from "react-redux";

export const CartButton: React.FC = () => {
  const counter = useSelector(selectTotalCounter);
  const price = useSelector(selectTotalPrice);
  
  return <CartButtonUI counter={counter} price={price} />;
};