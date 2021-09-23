import { useSelector } from "react-redux";
import { weatherInfoOfCity } from "../features/cities/citiesSlice";
import BookmarkButton from "./BookmarkButton";
import MapLocation from "./MapLocation";
import WeatherData from "./WeatherData";

function WeatherInfoCard() {
  const data = useSelector(weatherInfoOfCity);
  const lat = data?.weatherData?.coord?.lat;
  const lon = data?.weatherData?.coord?.lon;

  return (
    <>
      {Object.keys(data).length ? (
        <>
          <div className="flex justify-between items-center pb-3 border-b mb-6">
            <h2 className="text-2xl">{data.city}</h2>
            <BookmarkButton bookmarked={data.bookmarked} cityId={data.id} />
          </div>
          <div className="grid grid-cols-4 gap-4 text-sm pb-3 border-b mb-4">
            <WeatherData data={data.weatherData} />
          </div>
          <MapLocation lat={lat} lon={lon} />
        </>
      ) : (
        <div className="flex h-full items-center justify-center">
          <h2 className="text-2xl text-center text-gray-300">
            No city selected
          </h2>
        </div>
      )}
    </>
  );
}

export default WeatherInfoCard;
