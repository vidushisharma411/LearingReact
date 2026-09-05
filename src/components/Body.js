import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import ResMenu from "./RestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListofReataurants, setListofReataurants] = useState([]);
  const [originalList, setoriginalList] = useState([]);
  const [searchbtn, setsearchbtn] = useState("");
  const [filterbtntxt, setFilterbtntxt] = useState("⭐️Top Rated");
  const [isFiltered, setisFiltered] = useState(false);

  //whenever state variable update , react triggers a reconciliation cycle(re-render the component)
  console.log("renders");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9711023&lng=77.6544715&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    const data = await fetch("/.netlify/functions/restaurants");
    const json = await data.json();
    console.log(json);
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListofReataurants(restaurants);
    setoriginalList(restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h4>Please check your internet connection!!!</h4>;

  // in this return this is ternary operator its not very complicated stuss just read about it again okk???
  return ListofReataurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body  bg-[rgb(242,243,243)]">
      <div className="filter flex mx-4">
        <div className="Search-text ">

        <button
          className="filterbtn ml-1 w-25 my-2.5 bg-red-400 rounded h-8 "
          onClick={() => {
            if (!isFiltered) {
              const filteredList = originalList.filter(
                (res) => res.info.avgRating > 4.3
              );
              setListofReataurants(filteredList);
              setFilterbtntxt("See All");
              setisFiltered(true);
            } else {
              setListofReataurants(originalList);
              setFilterbtntxt("⭐️Top Rated");
              setisFiltered(false);
            }
          }}
        >
          {filterbtntxt}
        </button>
          <input
            type="text"
            className="border rounded m-4 ml-4 px-2 hover:border to-blue-200"
            value={searchbtn}
            onChange={(e) => {
              setsearchbtn(e.target.value);
            }}
          />
          
          <button
          className="bg-red-400 rounded w-15 h-8 "
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
      </div>
      <div className="res-container flex flex-wrap m-6 ">
        {ListofReataurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {" "}
            <RestaurantCard resData={restaurant.info} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
