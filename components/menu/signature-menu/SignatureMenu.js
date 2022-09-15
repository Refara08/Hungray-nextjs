import { useEffect, useState } from "react";

import CategoryFilter from "./CategoryFilter";
import WavesDown from "../../home/waves-down";
import MenuGroup from "./menu-group/MenuGroup";

import LIST_MENU from "../../../store/menu";

const SignatureMenu = () => {
  const [category, setCategory] = useState("ALL");
  const [menuItems, setMenuItems] = useState([...LIST_MENU]);

  useEffect(() => {
    if (category === "ALL") {
      setMenuItems(LIST_MENU);
    } else {
      setMenuItems(LIST_MENU.filter((item) => item.category === `${category}`));
      console.log(category);
    }
  }, [category]);

  const changeCategoryHandler = (val) => {
    setCategory(val);
  };

  return (
    <section>
      <div className="rotate-180">
        <WavesDown />
      </div>
      <div className="bg-light-yellow">
        <div className="custom-container sticky top-16 bg-light-yellow z-20 py-4">
          <h2 className="font-bold text-4xl w-[80%]">Our signature Menu</h2>
          <CategoryFilter onChangeCategory={changeCategoryHandler} />
        </div>
        <div className="custom-container">
          <MenuGroup items={menuItems} />
        </div>
      </div>
      <WavesDown />
    </section>
  );
};

export default SignatureMenu;
