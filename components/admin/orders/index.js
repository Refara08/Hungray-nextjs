import { useState } from "react";
import OrderItem from "./OrderItem";

const AdminOrders = ({ orderList }) => {
  const unpaidOrder = orderList.filter((item) => item.orderStatus === "UNPAID");
  const inKitchenOrder = orderList.filter(
    (item) => item.orderStatus === "PAID"
  );
  const readyOrder = orderList.filter((item) => item.orderStatus === "COOKED");
  const [viewingOrder, setViewingOrder] = useState("UNPAID");

  return (
    <section>
      <div className="flex flex-col h-[92vh]">
        <div
          onClick={() => setViewingOrder("UNPAID")}
          className="cursor-pointer  text-center p-4 bg-gradient-to-b from-light-yellow via-light-yellow to-white border-t-[1px] border-yellow"
        >
          <div className="custom-container">
            <h2 className="font-semibold tracking-wider">Unpaid Orders</h2>
          </div>
        </div>
        {viewingOrder === "UNPAID" && (
          <ul className="flex-[1] p-6 overflow-y-auto">
            {unpaidOrder.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
          </ul>
        )}
        <div
          onClick={() => setViewingOrder("PAID")}
          className="cursor-pointer text-center p-4 bg-gradient-to-b from-light-yellow via-light-yellow to-white border-t-[1px] border-yellow"
        >
          <div className="custom-container">
            <h2 className="font-semibold tracking-wider">In the kitchen</h2>
          </div>
        </div>
        {viewingOrder === "PAID" && (
          <ul className="flex-[1] p-6 overflow-y-auto">
            {inKitchenOrder.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
          </ul>
        )}
        <div
          onClick={() => setViewingOrder("COOKED")}
          className="cursor-pointer  text-center p-4 bg-gradient-to-b from-light-yellow via-light-yellow to-white border-t-[1px] border-yellow"
        >
          <div className="custom-container">
            <h2 className="font-semibold tracking-wider">Ready to serve</h2>
          </div>
        </div>
        {viewingOrder === "COOKED" && (
          <ul className="flex-[1] p-6 overflow-y-auto">
            {readyOrder.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default AdminOrders;
