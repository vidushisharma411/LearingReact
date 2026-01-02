import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import resData from "../utils/mockResData";


const ResMenu = () => {
  const [resInfo, setresInfo] = useState(resData);
  console.log(resInfo);

  // useEffect(() => {
  //     setresInfo(resData)
  // },[]);

  if (!resInfo) return <Shimmer />;

  // const{name, cuisine} = {resInfo?.data?.cards[2]?.card?.card?.info?.name}
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.data?.cards?.[2]?.card?.card?.info;

  const itemcards =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[3]?.card
      ?.card?.itemCards;
  console.log(itemcards);

  return (
    <div className="menu">
      <h2>{name}</h2>
      <p className="resinformation">
        {cuisines},{costForTwoMessage},{avgRating}
      </p>

      <h3>Menu</h3>
      <ul>
        {itemcards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs"}
            {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
