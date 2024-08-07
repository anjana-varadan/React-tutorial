
import { ImageURL } from "../utils/constants";
const RestoComponent = ({ restroData }) => {
    const { name, cuisines, avgRating, cloudinaryImageId } = restroData?.info;
    return (
      <div className="card-container">
        <div className="card">
          <img
            src={ ImageURL
               +
              cloudinaryImageId
            }
          ></img>
          <div className="card-content">
            <h4>{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Star</h4>
          </div>
        </div>
      </div>
    );
  };

  export default RestoComponent;