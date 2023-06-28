import { FaBeer } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div>
      <FaBeer color="Blue" size={60} title="Carrito Microsite" />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
