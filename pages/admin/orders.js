import Head from "next/head";
import axiosBase from "../../utils/axios-base";
import AdminOrders from "../../components/admin/orders";

const AdminOrdersPage = ({ orderList }) => {
  return (
    <>
      <Head>
        <title>Hungray | Orders</title>
        <meta
          name="description"
          content="Admin dashboard order monitoring of Hungray landing page, restaurant with online reservation, online delivery order, or in-resto online ordering system"
        />
        <meta
          name="keywords"
          content="restaurant, online order application, working space"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminOrders orderList={orderList} />
    </>
  );
};

export default AdminOrdersPage;

export const getServerSideProps = async () => {
  const orders = await axiosBase.get("api/orders");

  return {
    props: {
      orderList: orders.data,
    },
  };
};
