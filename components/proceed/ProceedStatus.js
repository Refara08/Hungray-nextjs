import OrderStatus from "./OrderStatus";

const ProceedStatus = ({ order }) => {
  return (
    <>
      {order.orderStatus !== "EXPIRED" && order.orderStatus !== "CANCELED" && (
        <OrderStatus status={order.orderStatus} />
      )}
      {(order.orderStatus === "EXPIRED" ||
        order.orderStatus === "CANCELED") && (
        <h2 className="text-xl font-bold">{`Your order has been ${order.orderStatus.toLowerCase()}`}</h2>
      )}
    </>
  );
};

export default ProceedStatus;
