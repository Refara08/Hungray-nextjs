import Navigation from "../navigation/Navigation";

const Layout = (props) => {
  return (
    <div className="text-black">
      <Navigation />
      <main>{props.children}</main>
      <p className="h-[2000px] w-full grid place-items-end">footer</p>
    </div>
  );
};

export default Layout;
