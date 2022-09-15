import Head from "next/head";
import About from "../components/about/About";
import BestSellingItems from "../components/menu/best-selling-section/BestSellingItems";
import Home from "../components/home/Home";
import SignatureMenu from "../components/menu/signature-menu/SignatureMenu";
import Testimonial from "../components/testimonial/Testimonial";

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
      <SignatureMenu />
      <Testimonial />
    </div>
  );
}
