import Head from "next/head";
import Home from "../components/home/Home";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Hungray | your best resto in town</title>
        <meta
          name="description"
          content="Hungray landing page, restaurant with online reservation, online delivery order, or in-resto online ordering system"
        />
        <meta
          name="keywords"
          content="restaurant, online order application, working space"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </div>
  );
}
