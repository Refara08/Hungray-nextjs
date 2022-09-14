import Image from "next/image";

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
      <div className="p-4">
        <h3 className="text-xl font-bold">{item.name}</h3>
        <p>{item.desc}</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="font-semibold">{formatedPrice}</p>
          <button className="button-sm border-2 border-yellow hover:border-transparent hover:bg-yellow">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestSellingItemCard;
