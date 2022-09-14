import Image from "next/image";

import BestSeller from "./BestSeller";
import Recommended from "./Recommended";

const MealsItem = ({ item }) => {
  const formatedPrice = `Rp.${item.price.toLocaleString("id-ID")}`;

  return (
    <div className="rounded-xl bg-white shadow-lg p-4 mb-6 md:flex md:flex-col md:justify-between">
      <div className="flex flex-row-reverse md:flex-col justify-between items-start gap-2">
        <div className="w-[120px] md:w-full rounded-lg overflow-hidden">
          <Image
            src={item.url}
            alt={`Image of ${item.name}`}
            width="150px"
            height="150px"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <div className="flex gap-2">
            {item.bestSeller && <BestSeller />}
            {item.recomended && <Recommended />}
          </div>
          <p className="text-sm leading-tight">{item.desc}</p>
          <p className="font-semibold">{formatedPrice}</p>
        </div>
      </div>
      <div className="w-full flex justify-end pt-4">
        <button className="button-sm border-2 border-yellow hover:border-transparent hover:bg-yellow">
          add
        </button>
      </div>
    </div>
  );
};

export default MealsItem;
