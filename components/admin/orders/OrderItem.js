import { useState } from "react";
import axiosBase from "../../../utils/axios-base";

const OrderItem = ({ item, updateList }) => {
  const [seeDetails, setSeeDetails] = useState(false);

  const goToNextStageHandler = async () => {
    let action;

    if (item.orderStatus === "UNPAID") {
      action = "PAID";
    } else if (item.orderStatus === "PAID") {
      action = "COOKED";
    } else if (item.orderStatus === "COOKED") {
      action = "SERVED";
    }

    // console.log(action);

    await axiosBase.put(`/api/orders/${item._id}`, {
      orderStatus: action,
    });
    // console.log(res.data);
    updateList();
  };

  return (
    <div className="mb-6 border-b-2 border-stone-100 pb-2">
      <div className="w-full activity-table grid grid-cols-2 lg:grid-cols-3 justify-start justify-items-start items-start gap-1 lg:gap-x-6">
        <div className="flex flex-col justify-start col-span-2">
          <h5>orderID</h5>
          <h6 className="">{item._id}</h6>
        </div>
        <div className="flex flex-col justify-start">
          <h5>name</h5>
          <h6 className="">{item.name}</h6>
        </div>
        <div className="flex flex-col justify-start">
          <h5>phone</h5>
          <h6 className="">{item.phone}</h6>
        </div>
        <div className="flex flex-col justify-start">
          <h5>Table Num</h5>
          <h6 className="">{item.table}</h6>
        </div>
        <div className="flex flex-col justify-start">
          <h5>Payment method</h5>
          <h6 className="">{item.payment}</h6>
        </div>
      </div>
      {!seeDetails && (
        <div className="flex justify-start mt-4">
          <button
            onClick={() => setSeeDetails((prev) => !prev)}
            className="text-blue-600"
          >
            see details
          </button>
        </div>
      )}
      {seeDetails && (
        <div className=" mt-4 w-fit md:w-[450px]">
          {item.orderedMeals.map((meal, index) => (
            <div key={index} className=" flex justify-between gap-6">
              <h5>{meal.name}</h5>
              <div className="flex gap-4">
                <h5>{`Rp.${meal.price.toLocaleString("en-US")}`}</h5>
                <h5>{`x${meal.amount}`}</h5>
                <h5>{`Rp.${(meal.amount * meal.price).toLocaleString(
                  "en-US"
                )}`}</h5>
              </div>
            </div>
          ))}
          <div className="flex justify-between font-semibold">
            <h5>Total price</h5>
            <h5>{`Rp.${item.totalAmount.toLocaleString("en-US")}`}</h5>
          </div>
          <button
            onClick={() => setSeeDetails((prev) => !prev)}
            className="mt-4 text-blue-600"
          >
            hide details
          </button>
        </div>
      )}
      <div className="w-full flex justify-end mt-2">
        <button
          onClick={goToNextStageHandler}
          className="button-sm bg-blue-600 text-white"
        >
          {item.orderStatus === "UNPAID"
            ? "confirm payment"
            : item.orderStatus === "PAID"
            ? "meals ready"
            : item.orderStatus === "COOKED" && "complete order"}
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
