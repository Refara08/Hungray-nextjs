import CartMobileModal from "./CartModal";
import BagIcon from "../../icons/BagIcon";

const CartMobileBtn = () => {
  return (
    <CartMobileModal>
      <div className="block lg:hidden bg-yellow p-2 rounded-lg relative">
        <BagIcon size="4vh" />
      </div>
      <div className="block lg:hidden absolute -top-3 -right-3 bg-red-600 text-white px-2 rounded-full">
        3
      </div>
    </CartMobileModal>
  );
};

export default CartMobileBtn;
