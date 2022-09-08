import Navigation from "../navigation/Navigation";

const Layout = (props) => {
  return (
    <div className="text-black">
      <Navigation />
      <main>{props.children}</main>
      {/* <p>footer</p> */}
    </div>
  );
};

export default Layout;
