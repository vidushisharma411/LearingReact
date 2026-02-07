import { useState } from "react";
import { CDN_URL } from "../utils/constant";
import MenuItem from "./MenuItem";


const ItemList = ({ items }) => {
  // console.log(items)
 
  return (
    <div>
      {items.map((item) => {
        return <MenuItem key={item.card.info.id} item={item}/>
      })}
    </div>
  );
};

export default ItemList;
