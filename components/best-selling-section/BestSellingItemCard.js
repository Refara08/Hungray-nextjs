import Image from "next/image";

const BestSellingItemCard = (props) => {
  const { item } = props;
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
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p>{item.desc}</p>
        <div className="mt-4 flex justify-end">
          <button className="button border-2 border-yellow hover:border-transparent hover:bg-yellow">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestSellingItemCard;
