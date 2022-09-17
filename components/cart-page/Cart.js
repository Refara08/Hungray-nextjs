import { useRouter } from "next/router";
import { useState } from "react";

import { useSelector } from "react-redux";
import BagIcon from "../icons/BagIcon";
import CartForm from "./CartForm";
import CartItems from "./CartItems";

const Cart = () => {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const formatedTotalAmount = `Rp.${totalAmount.toLocaleString("en-US")}`;

  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [table, setTable] = useState("");
  const [payment, setPayment] = useState("OVO");

  const changeCustomerNameHandler = (str) => {
    setCustomerName(str);
  };
  const changeEmailHandler = (str) => {
    setEmail(str);
  };
  const changePhoneHandler = (num) => {
    setPhone(num);
  };
  const changeTableHandler = (str) => {
    setTable(str);
  };
  const changePaymentHandler = (str) => {
    setPayment(str);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !customerName ||
      customerName.trim().length === 0 ||
      !email.includes("@") ||
      !phone ||
      phone.trim().length === 0 ||
      !table ||
      table.trim().length === 0 ||
      !payment
    ) {
      return;
    }

    const cart = {
      name: customerName,
      email,
      phone,
      table,
      payment,
      orderedMeals: cartItems,
    };

    console.log(cart);
    router.replace("/proceed");
  };

  if (cartItems.length === 0) {
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

  return (
    <section id="cart" className="py-12">
      <div className="custom-container">
        <form
          onSubmit={submitHandler}
          className="border-2 border-stone-200 shadow-xl pt-4 pb-8 px-4 rounded-xl lg:px-8"
        >
          <h2 className="text-2xl font-bold mb-4">Your ordered meals</h2>
          <div className="lg:grid lg:grid-cols-2 xl:grid-cols-5 lg:gap-12 lg:items-end ">
            <CartItems
              cartItems={cartItems}
              totalAmount={formatedTotalAmount}
            />
            <CartForm
              customerName={customerName}
              email={email}
              phone={phone}
              table={table}
              payment={payment}
              onChangeCustomerName={changeCustomerNameHandler}
              onChangeEmail={changeEmailHandler}
              onChangePhone={changePhoneHandler}
              onChangeTable={changeTableHandler}
              onChangePayment={changePaymentHandler}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Cart;
