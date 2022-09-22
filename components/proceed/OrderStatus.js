import { useEffect, useState } from "react";
import CheckedIcon from "../icons/CheckedIcon";
import CookingIcon from "../icons/CookingIcon";
import LoadingIcon from "../icons/LoadingIcon";
import PaymentIcon from "../icons/PaymentIcon";
import ServingIcon from "../icons/ServingIcon";

const OrderStatus = ({ status }) => {
  const [paymentStyle, setPaymentStyle] = useState("text-stone-400");
  const [cookingStyle, setCookingStyle] = useState("text-stone-400");
  const [servingStyle, setServingStyle] = useState("text-stone-400");

  useEffect(() => {
    if (status === "UNPAID") {
      setPaymentStyle("text-green-700 animate-pulse");
      setCookingStyle("text-stone-400");
      setServingStyle("text-stone-400");
    } else if (status === "PAID") {
      setPaymentStyle("text-green-700");
      setCookingStyle("text-orange-400 animate-pulse");
      setServingStyle("text-stone-400");
    } else if (status === "COOKED") {
      setPaymentStyle("text-green-700");
      setCookingStyle("text-orange-400");
      setServingStyle("text-blue-500 animate-pulse");
    } else if (status === "SERVED") {
      setPaymentStyle("text-green-700");
      setCookingStyle("text-orange-400");
      setServingStyle("text-blue-500");
    }
  }, [status]);

  return (
    <div className="w-full flex justify-around gap-8 p-4 border-b-2 border-stone-200">
      <div
        className={`relative flex flex-col items-center text-center leading-5 ${paymentStyle}`}
      >
        <PaymentIcon size={"2rem"} />
        <p className={`text-black`}>confirming your payment</p>
        {status !== "UNPAID" && (
          <div className="absolute -top-2 right-12 text-green-700">
            <CheckedIcon size={"1.2rem"} />
          </div>
        )}
        {status === "UNPAID" && (
          <div className="absolute -top-2 right-12 text-blue-400 animate-spin">
            <LoadingIcon size={"1.2rem"} />
          </div>
        )}
      </div>
      <div
        className={`relative flex flex-col items-center text-center leading-5 ${cookingStyle}`}
      >
        <CookingIcon size={"2rem"} />
        <p
          className={`${status === "PAID" ? "text-black" : " text-stone-400"}`}
        >
          your meals is in the kitchen
        </p>
        {status !== "UNPAID" && status !== "PAID" && (
          <div className="absolute -top-2 right-12 text-green-700">
            <CheckedIcon size={"1.2rem"} />
          </div>
        )}
        {status === "PAID" && (
          <div className="absolute -top-2 right-12 text-blue-400 animate-spin">
            <LoadingIcon size={"1.2rem"} />
          </div>
        )}
      </div>
      <div
        className={`relative flex flex-col items-center text-center leading-5 ${servingStyle}`}
      >
        <ServingIcon size={"2rem"} />
        <p>Your meals is in coming</p>
        {status === "SERVED" && (
          <div className="absolute -top-2 right-12 text-green-700">
            <CheckedIcon size={"1.2rem"} />
          </div>
        )}
        {status === "COOKED" && (
          <div className="absolute -top-2 right-12 text-blue-400 animate-spin">
            <LoadingIcon size={"1.2rem"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderStatus;
