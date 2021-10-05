import { useDispatch } from "react-redux";
import {
  addWeatherInfoOfCity,
  updateSelectedCity,
} from "../features/cities/citiesSlice";

function CityItem({ data }: any) {
  const dispatch = useDispatch();

  // // open weather api key
  // const apiKey = "YOUR_API_KEY";
  //   on click of city show weather data
  const showWeatherData = () => {
    const content = { ...data, selected: true };
    dispatch(updateSelectedCity(content));
    dispatch(addWeatherInfoOfCity(content));
  };

  return (
    <div
      className={
        data.selected
          ? "flex cursor-pointer hover:bg-gray-100 border rounded-lg p-3 my-3 justify-between bg-gray-200"
          : "flex cursor-pointer hover:bg-gray-100 border rounded-lg p-3 my-3 justify-between"
      }
      onClick={showWeatherData}
    >
      <h4>{data.city}</h4>
      <span>{Math.round(data.weatherData.main.temp)}°C</span>
    </div>
  );
}

export default CityItem;
