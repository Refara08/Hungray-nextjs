import Head from "next/head";

import Cart from "../components/cart-page/Cart";

export default function CartPage() {
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
      <Cart />
    </>
  );
}
