import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import ResMenu from "./RestaurantMenu";

const Body = () => {
  const [ListofReataurants, setListofReataurants] = useState([]);
  const [originalList, setoriginalList] = useState([]);
  const [searchbtn, setsearchbtn] = useState("");
  //whenever state variable update , react triggers a reconciliation cycle(re-render the component)
  console.log("renders");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9711023&lng=77.6544715&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListofReataurants(restaurants);
    setoriginalList(restaurants);
  };

  // in this return this is ternary operator its not very complicated stuss just read about it again okk???
  return ListofReataurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="Search-text">
          <input
            type="text"
            className="Search-box"
            value={searchbtn}
            onChange={(e) => {
              setsearchbtn(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchbtn);
              const filteredReastaurant = originalList.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(searchbtn.toLowerCase())
                //we had to use toLowerCase because it will give us all the retaurant which have those
              );
              setListofReataurants(filteredReastaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filterbtn"
          onClick={() => {
            const filteredList = originalList.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListofReataurants(filteredList);
          }}
        >
          top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {ListofReataurants.map((restaurant) => (
       <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}> <RestaurantCard resData={restaurant.info} /> </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
