import Image from "next/image";

import MenuButton from "../MenuButton";

const BestSellingItemCard = (props) => {
  const { item } = props;
  const formatedPrice = `Rp.${item.price.toLocaleString("id-ID")}`;
  return (
    <div className="w-[250px] rounded-xl overflow-hidden border-2 border-stone-200 shadow-xl">
      <Image
        draggable={false}
        src={item.url}
        alt={`image of ${item.title}`}
        width={"250px"}
        height={"250px"}
      />
      <div className="p-4 h-[160px]">
        <h3 className="text-xl font-bold">{item.name}</h3>
        <p>{item.desc}</p>
        <div className="mt-4 flex justify-between items-start">
          <p className="font-semibold">{formatedPrice}</p>
          <MenuButton mealName={item.name} price={item.price} id={item.id} />
        </div>
      </div>
    </div>
  );
};

export default BestSellingItemCard;
