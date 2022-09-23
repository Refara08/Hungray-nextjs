import { useState } from "react";

const OrderItem = ({ item }) => {
  const [seeDetails, setSeeDetails] = useState(false);

  return (
    <div className="mb-6 border-b-2 border-stone-100 pb-2">
      <div className="w-full activity-table grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-start justify-items-start items-start gap-1 lg:gap-x-6">
        <div className="flex flex-col xl:flex-row xl:items-center xl:gap-4 justify-start col-span-2 xl:col-span-4">
          <h5>orderID</h5>
          <h6 className="xl:mt-1">{item._id}</h6>
        </div>
        <div className="flex flex-col xl:flex-row justify-start xl:items-center xl:gap-4">
          <h5>name</h5>
          <h6 className="xl:mt-1">{item.name}</h6>
        </div>
        <div className="flex flex-col xl:flex-row justify-start xl:items-center xl:gap-4">
          <h5>phone</h5>
          <h6 className="xl:mt-1">{item.phone}</h6>
        </div>
        <div className="flex flex-col xl:flex-row justify-start xl:items-center xl:gap-4">
          <h5>Table Num</h5>
          <h6 className="xl:mt-1">{item.table}</h6>
        </div>
        <div className="flex flex-col xl:flex-row justify-start xl:items-center xl:gap-4">
          <h5>Payment method</h5>
          <h6 className="xl:mt-1">{item.payment}</h6>
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
    </div>
  );
};

export default OrderItem;
