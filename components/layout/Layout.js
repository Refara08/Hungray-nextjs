import { useRouter } from "next/router";

import Navigation from "../navigation/Navigation";
import Contact from "../contact/Contact";

const Layout = (props) => {
  const router = useRouter();

  return (
    <div className="text-black">
      {router.pathname !== "/orders/[id]" && <Navigation />}
      <main>{props.children}</main>
      <Contact />
    </div>
  );
};

export default Layout;
