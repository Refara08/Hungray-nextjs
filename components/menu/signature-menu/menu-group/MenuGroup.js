import MealsItem from "./MealsItem";

const MenuGroup = (props) => {
  const { items } = props;

  const compare = (a, b) => {
    if (a.category < b.category) {
      return 1;
    }
    if (a.category > b.category) {
      return -1;
    }
    return 0;
  };

  const loadedMenu = items.sort(compare);

  return (
    <div className="py-2 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:gap-x-4">
      {loadedMenu.map((item, index) => (
        <MealsItem key={index} item={item} />
      ))}
    </div>
  );
};

export default MenuGroup;
