import Head from "next/head";
import Auth from "../components/auth/Auth";

const AuthPage = () => {
  return (
    <>
      <Head>
        <title>Hungray | Authentication required</title>
        <meta
          name="description"
          content="Admin dashboard authentication of Hungray landing page, restaurant with online reservation, online delivery order, or in-resto online ordering system"
        />
        <meta
          name="keywords"
          content="restaurant, online order application, working space"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Auth />
    </>
  );
};

export default AuthPage;
