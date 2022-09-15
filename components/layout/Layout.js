import Navigation from "../navigation/Navigation";
import Contact from "../contact/Contact";

const Layout = (props) => {
  return (
    <div className="text-black">
      <Navigation />
      <main>{props.children}</main>
      <Contact />
    </div>
  );
};

export default Layout;
