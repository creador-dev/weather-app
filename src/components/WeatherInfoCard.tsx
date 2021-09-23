import { useSelector } from "react-redux";
import { weatherInfoOfCity } from "../features/cities/citiesSlice";
import BookmarkButton from "./BookmarkButton";

function WeatherInfoCard() {
  const data = useSelector(weatherInfoOfCity);
  return (
    <div>
      <div className="flex justify-between">
        <h3>{data.city}</h3>
        <BookmarkButton bookmarked={data.bookmarked} cityId={data.id} />
      </div>
      {/* <div>{data.weatherData}</div> */}
    </div>
  );
}

export default WeatherInfoCard;
