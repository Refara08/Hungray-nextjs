import { useDispatch, useSelector } from "react-redux";

import { addItem, removeItem } from "../../store/app-state-data/cartSlice";

const MenuButton = (props) => {
  const { mealName, price, id } = props;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const existingItemIndex = cartItems.findIndex((meals) => meals.id === id);
  const isExist = cartItems[existingItemIndex];

  const addItemHandler = () => {
    dispatch(
      addItem({
        id,
        name: mealName,
        price,
        amount: 1,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(removeItem(id));
  };

  return (
    <>
      {!isExist && (
        <button
          onClick={addItemHandler}
          className="button-sm border-2 border-yellow hover:border-transparent hover:bg-yellow"
        >
          add
        </button>
      )}
      {isExist && (
        <div className="flex gap-4 items-center justify-end w-full">
          <button
            onClick={removeItemHandler}
            className="font-bold border-2 border-yellow hover:border-transparent hover:bg-yellow hover:shadow-xl rounded-full h-full aspect-square px-2"
          >
            -
          </button>
          <h6>{isExist.amount}</h6>
          <button
            className="font-bold border-2 border-yellow hover:border-transparent hover:bg-yellow hover:shadow-xl rounded-full h-full aspect-square px-2"
            onClick={addItemHandler}
          >
            +
          </button>
        </div>
      )}
    </>
  );
};

export default MenuButton;
