import MealsItem from "./MealsItem";

const MenuGroup = ({ items }) => {
  return (
    <div className="py-2 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:gap-x-4">
      {items.map((item, index) => (
        <MealsItem key={index} item={item} />
      ))}
    </div>
  );
};

export default MenuGroup;
