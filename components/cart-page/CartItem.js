import { useState } from "react";
import MenuButton from "../menu/MenuButton";

const CartItem = ({ item, onUpdateOrderedMeals }) => {
  const isExist = item.amount > 0;
  const totalPrice = `Rp.${(item.amount * item.price).toLocaleString("en-US")}`;

  const [note, setNote] = useState(item.note);

  const updateNotesHandler = (e) => {
    setNote(e.target.value);
  };

  const pushMealHandler = () => {
    onUpdateOrderedMeals({
      id: item.id,
      note: note,
    });
  };

  return (
    <div key={item.id} className="meals-item-cart mb-8">
      <div className="flex justify-between text-lg font-semibold">
        <h4>{item.name}</h4>
        <div className="flex items-center gap-4">
          <h6>{`x${item.amount}`}</h6>
          <h6>{totalPrice}</h6>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-center items-end py-1">
        <div className="flex gap-4 items-end col-span-2">
          <label htmlFor={item.name}>note:</label>
          <textarea
            name={item.name}
            id={item.name}
            cols="30"
            rows="1"
            value={note}
            onChange={updateNotesHandler}
            onBlur={pushMealHandler}
          ></textarea>
        </div>
        <div className="h-[30px]">
          <MenuButton
            mealName={item.name}
            price={item.price}
            id={item.id}
            isExist={isExist}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
