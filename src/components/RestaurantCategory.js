import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (data) => {
  const [handleClick, setHandleClick] = useState(false);
  
  const recomandedList = () => {
    setHandleClick(!handleClick);
  };

  // console.log(data);
  return (
    <div className="">
      <div className="w-6/12 m-auto  bg-white shadow-lg p-4 my-2   shadow-gray-400 shadow-md rounded-xl">
        <div
          className="flex justify-between font-bold  cursor-pointer"
          onClick={recomandedList}
        >
          <span>
            {data.data.title} ({data.data.itemCards.length})
          </span>
          <span>{handleClick ? "⬆️" : "⬇️"}</span>
        </div>
        {handleClick && <ItemList items={data.data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
