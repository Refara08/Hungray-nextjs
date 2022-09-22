import { useRouter } from "next/router";

import Image from "next/image";
import axiosBase from "../../utils/axios-base";
import LoadingIcon from "../icons/LoadingIcon";

const ProceedPayment = ({
  payment,
  status,
  expiredDate,
  onUpdateLoadedOrder,
}) => {
  const route = useRouter();
  const formattedExpiredDate = `${("0" + expiredDate.getHours()).slice(-2)}:${(
    "0" + expiredDate.getMinutes()
  ).slice(-2)}`;

  const cancelOrderHandler = async () => {
    const res = await axiosBase.put(`api/orders/${route.query.id}`, {
      orderStatus: "CANCELED",
    });

    onUpdateLoadedOrder(res.data);
    console.log(res);
  };

  return (
    <div className="flex-[1] border-2 border-stone-100 shadow-xl p-6 rounded-xl">
      {status !== "EXPIRED" && (
        <div className="flex justify-between">
          <h3>Complete your payment before: </h3>
          <h3 className="animate-pulse font-bold">{formattedExpiredDate}</h3>
        </div>
      )}
      {status === "EXPIRED" && (
        <div className="flex justify-between">
          <h3>Your order is expired </h3>
        </div>
      )}
      <div className="flex justify-between py-6 h-[98.5%]">
        <div className="flex flex-col justify-between items-start">
          <div>
            {payment !== "Cash" && (
              <>
                <h3>Transfer to</h3>
                <h2 className="text-xl font-bold">{`${payment} - Gema Refantero`}</h2>
              </>
            )}
            {payment === "Cash" && (
              <>
                <h2 className="text-xl font-bold">
                  Complete your payment to Casheer
                </h2>
                <p className="">{`You need to complete your payment to casheer before the payment order expired`}</p>
                <div className="w-full py-6 grid place-items-center">
                  <div className="animate-spin w-fit">
                    <LoadingIcon size="2rem" />
                  </div>
                </div>
              </>
            )}
          </div>
          <button
            onClick={cancelOrderHandler}
            className="button bg-red-600 text-white"
          >
            cancel order
          </button>
        </div>
        {payment !== "Cash" && (
          <div>
            <Image
              src={`/images/proceed/${payment.toLowerCase()}.jpeg`}
              alt={`QRIS of ${payment}`}
              width="300px"
              height="300px"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProceedPayment;
