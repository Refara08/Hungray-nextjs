import Head from "next/head";
import About from "../components/about/About";
import BestSellingItems from "../components/best-selling-section/BestSellingItems";
import Home from "../components/home/Home";

import WavesDown from "../components/home/waves-down";

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
      <About />
      <BestSellingItems />
      <div className="rotate-180">
        <WavesDown />
      </div>
    </div>
  );
}
