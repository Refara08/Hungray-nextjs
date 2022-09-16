import BagIcon from "../icons/BagIcon";

const Cart = ({ cartItem }) => {
  if (!cartItem) {
    return (
      <section
        id="cart"
        className="flex flex-col justify-end items-center gap-4 text-stone-400 h-[30vh]"
      >
        <BagIcon size="4rem" />
        <span className="text-3xl font-bold">Your Bag is empty :(</span>
      </section>
    );
  }

  return <section id="cart">your.. cart is not empty</section>;
};

export default Cart;
