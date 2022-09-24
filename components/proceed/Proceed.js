import Link from "next/link";

import ProceedActions from "./ProceedActions";
import ProceedStatus from "./ProceedStatus";

const Proceed = ({ order, expiredDate, onUpdateLoadedOrder }) => {
  return (
    <section id="proceed" className="pb-8 pt-36">
      <div className="custom-container">
        <ProceedStatus order={order} />
        {order.orderStatus !== "SERVED" && (
          <ProceedActions
            order={order}
            expiredDate={expiredDate}
            onUpdateLoadedOrder={onUpdateLoadedOrder}
          />
        )}
        {order.orderStatus === "SERVED" && (
          <div className="custom-container mt-4">
            <div className="h-[40vh] grid place-items-center border-2 border-stone-100 rounded-xl shadow-xl">
              <div className="flex flex-col items-center gap-6">
                <h2 className="text-3xl font-bold">Enjoy your meal!</h2>
                <Link href="/">
                  <a className="button bg-yellow ">back to home</a>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Proceed;
