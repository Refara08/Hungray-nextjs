import CartMobileModal from "./CartModal";
import BagIcon from "../../icons/BagIcon";

const CartMobileBtn = () => {
  return (
    <CartMobileModal>
      <div className="block lg:hidden bg-yellow p-2 rounded-lg">
        <BagIcon size="3vh" />
      </div>
    </CartMobileModal>
  );
};

export default CartMobileBtn;
