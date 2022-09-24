import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Proceed from "../../components/proceed/Proceed";
import axiosBase from "../../utils/axios-base";

const OrderPage = ({ order }) => {
  const route = useRouter();
  const [loadedOrder, setLoadedOrder] = useState(order);
  const [expiredUpdated, setExpiredUpdated] = useState(false);
  //1800000
  const expiredTime = new Date(loadedOrder.createdAt).getTime() + 1800000;
  const expiredDate = new Date(expiredTime);
  const [isExpired, setIsExpired] = useState(
    new Date() >= new Date(expiredDate)
  );

  const updateLoadedOrder = (data) => {
    setLoadedOrder(data);
  };

  //update order every 1 minutes
  useEffect(() => {
    const updateOrder = setInterval(() => {
      if (loadedOrder.orderStatus === "SERVED") {
        return;
      }

      axiosBase.get(`/api/orders/${route.query.id}`).then(function (response) {
        setLoadedOrder(response.data);
        // console.log(response);
      });
    }, 60000);

    return () => clearInterval(updateOrder);
  }, [loadedOrder.orderStatus]);

  //update order status to Expired if the payment not proceed until due time
  useEffect(() => {
    const expiringTimer = setInterval(() => {
      setIsExpired(new Date() >= new Date(expiredDate));
    }, 5000);

    if (isExpired && !expiredUpdated && loadedOrder.orderStatus === "UNPAID") {
      setExpiredUpdated(true);
      axiosBase
        .put(`/api/orders/${route.query.id}`, { orderStatus: "EXPIRED" })
        .then(function (response) {
          setLoadedOrder(response.data);
          // console.log(response);
        });
    }

    return () => clearInterval(expiringTimer);
  }, [isExpired, expiredUpdated, loadedOrder.orderStatus]);

  //warning pop-up when leaving the page
  useEffect(() => {
    const warningText =
      "Your order will be cancelled if you leave the page, are you sure?";

    const handleWindowClose = (e) => {
      if (
        loadedOrder.orderStatus === "EXPIRED" ||
        loadedOrder.orderStatus === "CANCELED" ||
        loadedOrder.orderStatus === "SERVED"
      )
        return;
      e.preventDefault();
      return (e.returnValue = warningText);
    };

    const handleBrowseAway = () => {
      if (
        loadedOrder.orderStatus === "EXPIRED" ||
        loadedOrder.orderStatus === "CANCELED" ||
        loadedOrder.orderStatus === "SERVED"
      )
        return;
      if (window.confirm(warningText)) return;
      route.events.emit("routeChangeError");
      throw "routeChange aborted.";
    };

    window.addEventListener("beforeunload", handleWindowClose);
    route.events.on("routeChangeStart", handleBrowseAway);

    return () => {
      window.removeEventListener("beforeunload", handleWindowClose);
      route.events.off("routeChangeStart", handleBrowseAway);
    };
  }, [loadedOrder.orderStatus]);

  return (
    <>
      <Head>
        <title>Hungray | Your order is being proceed</title>
        <meta name="description" content="Your cart" />
        <meta name="keywords" content="Proceeding your order..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Proceed
        order={loadedOrder}
        expiredDate={expiredDate}
        onUpdateLoadedOrder={updateLoadedOrder}
      />
    </>
  );
};

export default OrderPage;

export const getServerSideProps = async ({ params }) => {
  const res = await axiosBase.get(`api/orders/${params.id}`);

  return {
    props: {
      order: res.data,
    },
  };
};
