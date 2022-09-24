import Head from "next/head";

import Cart from "../components/cart-page/Cart";
import axiosBase from "../utils/axios-base";

export default function CartPage({ restoStatus }) {
  return (
    <>
      <Head>
        <title>Hungray | Cart</title>
        <meta name="description" content="Your cart" />
        <meta
          name="keywords"
          content="restaurant, online order application, working space"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cart restoStatus={restoStatus} />
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const resto = await axiosBase.get("api/resto");

  return {
    props: {
      restoStatus: resto.data[0],
    },
  };
};
