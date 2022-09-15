import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import CategoryFilter from "./CategoryFilter";
import WaveWrap from "../../ui/WaveWrap";
import MenuGroup from "./menu-group/MenuGroup";

import LIST_MENU from "../../../store/menu";

const SignatureMenu = () => {
  const [category, setCategory] = useState("ALL");
  const [menuItems, setMenuItems] = useState([...LIST_MENU]);
  const router = useRouter();

  useEffect(() => {
    if (category === "ALL") {
      setMenuItems(LIST_MENU);
    } else {
      setMenuItems(LIST_MENU.filter((item) => item.category === `${category}`));
      console.log(category);
      console.log("FIRE");
      router.replace("/#signature");
    }
  }, [category]);

  const changeCategoryHandler = (val) => {
    setCategory(val);
  };

  return (
    <section id="signature">
      <WaveWrap>
        <div className="bg-light-yellow">
          <div className="custom-container sticky top-16 bg-light-yellow z-20 pb-1 sm:py-4">
            <h2 className="font-bold text-4xl w-full">Our signature Menu</h2>
            <CategoryFilter onChangeCategory={changeCategoryHandler} />
          </div>
          <div className="custom-container">
            <MenuGroup items={menuItems} />
          </div>
        </div>
      </WaveWrap>
    </section>
  );
};

export default SignatureMenu;
