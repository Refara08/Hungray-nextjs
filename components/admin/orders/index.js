import { useState, useEffect } from "react";
import axiosBase from "../../../utils/axios-base";
import OrderItem from "./OrderItem";

const AdminOrders = ({ orderList }) => {
  const [loadedOrderList, setLoadedOrderList] = useState(orderList);
  const unpaidOrder = loadedOrderList.filter(
    (item) => item.orderStatus === "UNPAID"
  );
  const inKitchenOrder = loadedOrderList.filter(
    (item) => item.orderStatus === "PAID"
  );
  const readyOrder = loadedOrderList.filter(
    (item) => item.orderStatus === "COOKED"
  );
  const [viewingOrder, setViewingOrder] = useState("UNPAID");

  const updateLoadedOrderList = async () => {
    const res = await axiosBase.get("/api/orders");
    setLoadedOrderList(res.data);
    // console.log(loadedOrderList);
  };

  useEffect(() => {
    const updateOrder = setInterval(() => {
      axiosBase.get(`/api/orders`).then(function (response) {
        setLoadedOrderList(response.data);
        // console.log(response);
      });
    }, 10000);

    return () => clearInterval(updateOrder);
  }, []);

  return (
    <section>
      <div className="flex flex-col h-[92vh] lg:grid lg:grid-cols-3 lg:gap-4">
        {/* unpaid orders */}
        <div
          className={`${
            viewingOrder === "UNPAID" && "flex-[1]"
          } lg:shadow-xl lg:rounded-b-xl`}
        >
          <div
            onClick={() => setViewingOrder("UNPAID")}
            className="cursor-pointer  text-center p-4 bg-gradient-to-b from-light-yellow via-light-yellow to-white border-t-[1px] border-yellow"
          >
            <div className="custom-container">
              <h2 className="font-semibold tracking-wider">Unpaid Orders</h2>
            </div>
          </div>
          {viewingOrder === "UNPAID" && (
            <ul className="block lg:hidden flex-[1] p-6 overflow-y-auto">
              {unpaidOrder.map((item, index) => (
                <OrderItem
                  key={index}
                  item={item}
                  updateList={updateLoadedOrderList}
                />
              ))}
            </ul>
          )}
          <ul className="lg:block hidden flex-[1] p-6 overflow-y-auto">
            {unpaidOrder.map((item, index) => (
              <OrderItem
                key={index}
                item={item}
                updateList={updateLoadedOrderList}
              />
            ))}
          </ul>
        </div>

        {/* in the kitchen orders */}
        <div
          className={`${
            viewingOrder === "PAID" && "flex-[1]"
          } lg:shadow-xl lg:rounded-b-xl`}
        >
          <div
            onClick={() => setViewingOrder("PAID")}
            className="cursor-pointer text-center p-4 bg-gradient-to-b from-light-yellow via-light-yellow to-white border-t-[1px] border-yellow"
          >
            <div className="custom-container">
              <h2 className="font-semibold tracking-wider">In the kitchen</h2>
            </div>
          </div>
          {viewingOrder === "PAID" && (
            <ul className="block lg:hidden flex-[1] p-6 overflow-y-auto">
              {inKitchenOrder.map((item, index) => (
                <OrderItem
                  key={index}
                  item={item}
                  updateList={updateLoadedOrderList}
                />
              ))}
            </ul>
          )}
          <ul className="lg:block hidden flex-[1] p-6 overflow-y-auto">
            {inKitchenOrder.map((item, index) => (
              <OrderItem
                key={index}
                item={item}
                updateList={updateLoadedOrderList}
              />
            ))}
          </ul>
        </div>

        {/* ready to serve orders */}
        <div
          className={`${
            viewingOrder === "COOKED" && "flex-[1]"
          } lg:shadow-xl lg:rounded-b-xl`}
        >
          <div
            onClick={() => setViewingOrder("COOKED")}
            className="cursor-pointer  text-center p-4 bg-gradient-to-b from-light-yellow via-light-yellow to-white border-t-[1px] border-yellow"
          >
            <div className="custom-container">
              <h2 className="font-semibold tracking-wider">Ready to serve</h2>
            </div>
          </div>
          {viewingOrder === "COOKED" && (
            <ul className="block lg:hidden flex-[1] p-6 overflow-y-auto">
              {readyOrder.map((item, index) => (
                <OrderItem
                  key={index}
                  item={item}
                  updateList={updateLoadedOrderList}
                />
              ))}
            </ul>
          )}
          <ul className="lg:block hidden flex-[1] p-6 overflow-y-auto">
            {readyOrder.map((item, index) => (
              <OrderItem
                key={index}
                item={item}
                updateList={updateLoadedOrderList}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdminOrders;
