import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="w-[220px] h-[355px] ml-1 m-[6px] p-[5px] shadow-lg  bg-white rounded-md hover:scale-95  hover:shadow-white" >
      <img
        className="res-logo h-[155px] w-full rounded-md "
        alt="rest-logo "
        src={
         CDN_URL  + resData.cloudinaryImageId
        }
      ></img>
      <h3 className="font-bold py-3">{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating}⭐</h4>
      <h4>{resData.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard ;  