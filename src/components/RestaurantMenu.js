import { useEffect, useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./shimmer";
import resData from "../utils/mockResData";

const ResMenu = () => {
  const [resInfo, setresInfo] = useState(resData);

  if (!resInfo) return <Shimmer />;

  // const{name, cuisine} = {resInfo?.data?.cards[2]?.card?.card?.info?.name}
  const { name, cuisines, costForTwoMessage, avgRating, locality } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const time = resInfo?.data?.cards[2]?.card?.card?.info?.sla?.slaString;

  const itemcards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
  // console.log(itemcards);

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];
  // console.log("categories:")
  // console.log(categories);

  return (
    <div className="text-center">
      <div className="font-bold my-4 text-3xl mr-[530px] ">
        <h2>{name}</h2>
      </div>
      <div className="my-6 w-6/12 bg-white  m-auto h-[200px] rounded-xl shadow-gray-400 shadow-2xl">
        <div className="mr-120 py-4">
          <p className="font-bold text-xl">
            ✪ {avgRating} - {costForTwoMessage}
          </p>
          <h3 className="text-red-400 my-3 font-bold underline">{cuisines}</h3>
          <h3 className="font-bold">📍{locality}</h3>
          <h3 className="my-4 font-bold">⏳ {time}</h3>
        </div>
      </div>
      {categories.map((cat) => {
        return (
          <RestaurantCategory
            key={cat.card.card.categoryId}
            data={cat?.card?.card}
          />
        );
      })}
    </div>
  );
};

export default ResMenu;
