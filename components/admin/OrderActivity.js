import OrderActivityItem from "./OrderActivityItem";

const OrderActivity = ({ orderList }) => {
  return (
    <div className="shadow-xl border-2 border-stone-100 p-6 rounded-xl w-full">
      <h2 className="text-2xl font-semibold mb-6">Orders Activity</h2>
      <div className=" h-[50vh] overflow-y-scroll">
        <div className="h-screen w-full">
          {orderList.map((item, index) => (
            <OrderActivityItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderActivity;
