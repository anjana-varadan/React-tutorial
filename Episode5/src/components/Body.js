import { useState } from "react";
import restaurantList from "../utils/mockData";
import RestoComponent from "./RestoComponent";

const Body = () => {
  const [restoList, setRestaurantList] = useState(restaurantList);

  const handleFilter = () => {
    const filteredRest = restoList.filter((resto) => {
      return resto.info.avgRating > 4;
    });
    setRestaurantList(filteredRest);
  };

  return (
    <div className="layout">
      <button className="filter-btn" onClick={handleFilter}>
        Top Rated
      </button>
      <div className="card-layout">
        {restoList.map((restaurant) => {
          return (
            <RestoComponent restroData={restaurant} key={restaurant.info.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
