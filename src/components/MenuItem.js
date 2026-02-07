import { useState } from "react";
import { CDN_URL } from "../utils/constant";

const MenuItem = (item)=>{
    // console.log(item);
     const [desVisible, setDesVisible] = useState(false);
     const handleDesVisible = ()=>{
       setDesVisible(!desVisible);
     }
    return (
              <div
                className="m-2 p-2  border-gray-400 border-b-2 text-left flex justify-between"
              >
                <div className="mr-50 my-7">
                <div className="font-bold">  <h3>{item.item.card.info.name}</h3>
                  <span>{item.item.card.info.price / 100}₹</span>
                  <h3>★{item.item?.card?.info?.ratings?.aggregatedRating?.rating}</h3> 
                  </div> 
                  {
                    desVisible?
                      (
                        <div>
                          <p className="text-xs">{item.item.card.info.description}</p>
                          <button className="text-red-400 font-bold" onClick={()=>{
                          handleDesVisible();
                        }}>less</button>
                        </div>
                      )
                      :
                      <button className="text-red-400 font-bold" onClick={()=>{
                        handleDesVisible();
                      }}>more</button>
                  }
    
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={CDN_URL + item.item.card.info.imageId}
                    className="w-32 h-32 object-cover"
                  ></img>
                </div>
               
              </div>
            );
};
 
export default MenuItem ;