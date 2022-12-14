import Link from "next/link";

import CartMobileModal from "./CartModal";
import BagIcon from "../../icons/BagIcon";

const CartMobileBtn = ({ bagNum }) => {
  return (
    <CartMobileModal>
      <Link href="/cart">
        <a>
          <div className="block lg:hidden bg-yellow p-2 rounded-lg relative">
            <BagIcon size="4vh" />
          </div>
          <div className="block lg:hidden absolute -top-3 -right-3 bg-red-600 text-white px-2 rounded-full">
            {bagNum}
          </div>
        </a>
      </Link>
    </CartMobileModal>
  );
};

export default CartMobileBtn;
