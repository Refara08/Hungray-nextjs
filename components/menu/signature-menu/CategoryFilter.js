import { useState } from "react";

const CategoryFilter = (props) => {
  const { onChangeCategory } = props;
  const [currFilter, setCurrFilter] = useState("ALL");

  const changeFilterHandler = (filter) => {
    setCurrFilter(filter);
    onChangeCategory(filter);
  };

  const filterCategoryHandler = (e) => {
    setCurrFilter(e.target.value);
    onChangeCategory(e.target.value);
  };

  const filterBtnStyle =
    "py-1 px-3 rounded-full hover:bg-yellow hover:shadow-lg transition duration-300";

  return (
    <div className="flex items-center gap-4 my-2 sm:my-4">
      <h3>Filter by category</h3>

      {/* //filter for mobile */}
      <select
        className="block sm:hidden bg-yellow py-1 px-3 rounded-full font-semibold text-center appearance-none"
        name="category"
        id="category"
        defaultValue={"ALL"}
        onChange={filterCategoryHandler}
      >
        <option value="ALL">All</option>
        <option value="PIZZA">Pizza</option>
        <option value="RAMEN">Ramen</option>
        <option value="RICE">Rice</option>
        <option value="DRINKS">Drinks</option>
      </select>

      {/* filter for tablet and higher */}
      <div className="hidden sm:flex items-center gap-4">
        <button
          onClick={() => changeFilterHandler("ALL")}
          className={`${filterBtnStyle} ${
            currFilter === "ALL"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          All
        </button>
        <button
          onClick={() => changeFilterHandler("PIZZA")}
          className={`${filterBtnStyle} ${
            currFilter === "PIZZA"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Pizza
        </button>
        <button
          onClick={() => changeFilterHandler("RAMEN")}
          className={`${filterBtnStyle} ${
            currFilter === "RAMEN"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Ramen
        </button>
        <button
          onClick={() => changeFilterHandler("RICE")}
          className={`${filterBtnStyle} ${
            currFilter === "RICE"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Rice
        </button>
        <button
          onClick={() => changeFilterHandler("DRINKS")}
          className={`${filterBtnStyle} ${
            currFilter === "DRINKS"
              ? "bg-yellow shadow-lg"
              : "bg-stone-300 shadow-none"
          }`}
        >
          Drinks
        </button>
      </div>
    </div>
  );
};

export default CategoryFilter;
