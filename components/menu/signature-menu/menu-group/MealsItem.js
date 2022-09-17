import Image from "next/image";

import { useSelector } from "react-redux";

import MenuButton from "../../MenuButton";

import BestSeller from "./BestSeller";
import Recommended from "./Recommended";

const MealsItem = ({ item }) => {
  const formatedPrice = `Rp.${item.price.toLocaleString("id-ID")}`;

  const cartItems = useSelector((state) => state.cart.items);
  const existingItemIndex = cartItems.findIndex(
    (meals) => meals.id === item.id
  );
  const isExist = cartItems[existingItemIndex];

  return (
    <div className="rounded-xl bg-white shadow-lg p-4 mb-6 md:flex md:flex-col md:justify-between">
      <div className="grid grid-cols-3 md:flex md:flex-col justify-between items-start gap-2">
        <div className="order-2 md:order-none rounded-lg w-full sm:overflow-hidden">
          <Image
            src={item.url}
            alt={`Image of ${item.name}`}
            width="150px"
            height="150px"
            layout="responsive"
          />
          <div className="flex justify-end mt-1 sm:hidden w-full translate-y-[5px] h-[36px]">
            <MenuButton
              mealName={item.name}
              price={item.price}
              id={item.id}
              isExist={isExist}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 col-span-2 order-1 md:order-none">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <div className="flex gap-2">
            {item.bestSeller && <BestSeller />}
            {item.recomended && <Recommended />}
          </div>
          <p className="text-sm leading-tight">{item.desc}</p>
          <p className="font-semibold">{formatedPrice}</p>
        </div>
      </div>
      <div className="w-full hidden sm:flex justify-end pt-0 sm:pt-4">
        <MenuButton
          mealName={item.name}
          price={item.price}
          id={item.id}
          isExist={isExist}
        />
      </div>
    </div>
  );
};

export default MealsItem;
