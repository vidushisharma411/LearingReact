import { useState } from "react";
import { CDN_URL } from "../utils/constant";

const MenuItem = (item) => {
  // console.log(item);
  const [desVisible, setDesVisible] = useState(false);
  const [itemcount, setItemCount] = useState(0);
  const handleDesVisible = () => {
    setDesVisible(!desVisible);
  };
  const add = () => {
    setItemCount(itemcount + 1);
  };
  const dicrease = () => {
    if(itemcount > 0)
    {setItemCount(itemcount - 1);}
  };

  return (
    <div className="m-2 p-2  border-gray-400 border-b-2 text-left flex justify-between">
      <div className="mr-50 my-7">
        <div className="font-bold">
          {" "}
          <h3>{item.item.card.info.name}</h3>
          <span>{item.item.card.info.price / 100}₹</span>
          <h3>★{item.item?.card?.info?.ratings?.aggregatedRating?.rating}</h3>
        </div>
        {desVisible ? (
          <div>
            <p className="text-xs">{item.item.card.info.description}</p>
            <button
              className="text-red-400 font-bold cursor-pointer"
              onClick={() => {
                handleDesVisible();
              }}
            >
              less
            </button>
          </div>
        ) : (
          <button
            className="text-red-400 font-bold cursor-pointer"
            onClick={() => {
              handleDesVisible();
            }}
          >
            more
          </button>
        )}
      </div>
      <div className="flex-shrink-0 relative" >
        <img
          src={CDN_URL + item.item.card.info.imageId}
          className="w-32 h-32 object-cover"
        ></img>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
          {itemcount == 0 ? (
            <button className="bg-white shadow-md shadow-gray-400  text-green-600  font-bold rounded w-25 h-8 mx-[27px]  py-1 px-4 " onClick={add}>
              Add
            </button>
          ) : (
            <div className="flex gap-5 bg-white shadow-md text-green-600 shadow-gray-400  font-bold rounded w-25 h-8 mx-[27px]  py-1 px-4">
              <button onClick={dicrease}>-</button>
              <p>{itemcount}</p>
              <button onClick={add}>+</button>
            </div> 
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
