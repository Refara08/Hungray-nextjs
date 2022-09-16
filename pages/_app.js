import "../styles/globals.css";
import Layout from "../components/layout/Layout";

import store from "../store/app-state-data/index-store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
