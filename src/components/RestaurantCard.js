import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" >
      <img
        className="res-logo"
        alt="rest-logo"
        src={
         CDN_URL  + resData.cloudinaryImageId
        }
      ></img>
      <h3> {resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.avgRating}</h4>
      <h4>{resData.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard ;  