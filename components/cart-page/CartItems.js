import { useDispatch } from "react-redux";
import { updateItemNote } from "../../store/app-state-data/cartSlice";
import CartItem from "./CartItem";

const CartItems = ({ cartItems, totalAmount }) => {
  const dispatch = useDispatch();

  const updateOrderedMeals = (arr) => {
    dispatch(updateItemNote({ id: arr.id, note: arr.note }));
  };

  return (
    <div className="xl:col-span-3 h-full">
      <div className="border-b-2 border-stone-300 pb-4 mb-8 h-full flex flex-col justify-between">
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateOrderedMeals={updateOrderedMeals}
            />
          ))}
        </div>
        <div className="flex justify-between items-center text-xl font-bold">
          <h3>Total amount</h3>
          <h3>{totalAmount}</h3>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
