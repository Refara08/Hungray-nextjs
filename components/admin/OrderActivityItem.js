import { useState } from "react";

const OrderActivityItem = ({ item }) => {
  const [seeDetails, setSeeDetails] = useState(false);

  const date = new Date(item.createdAt);
  const formatedHour = ("0" + date.getHours().toLocaleString("en-US")).slice(
    -2
  );
  const formatedMinutes = (
    "0" + date.getMinutes().toLocaleString("en-US")
  ).slice(-2);
  const createdAt = `${date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "2-digit",
    month: "short",
    day: "numeric",
  })} ${formatedHour}:${formatedMinutes}`;

  return (
    <div className="mb-6 border-b-2 border-stone-100 pb-2">
      <div className="w-full activity-table grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 lg:gap-x-6">
        <div className="flex flex-col xl:flex-row xl:items-center xl:gap-4 justify-start col-span-2 xl:col-span-4">
          <h5>orderID</h5>
          <h6 className="xl:mt-1">{item._id}</h6>
        </div>
        <div className="flex flex-col justify-start">
          <h5>name</h5>
          <h6>{item.name}</h6>
        </div>
        <div className="flex flex-col justify-start">
          <h5>email</h5>
          <h6>{item.email}</h6>
        </div>
        <div className="flex flex-col justify-start">
          <h5>order amount</h5>
          <h6>{item.orderedMeals.length}</h6>
        </div>
        <div className="flex flex-col justify-start">
          <h5>order made</h5>
          <h6>{createdAt}</h6>
        </div>
      </div>
      {!seeDetails && (
        <div className="flex justify-start">
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
            className="text-blue-600"
          >
            hide details
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderActivityItem;
