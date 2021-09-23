import { useDispatch } from "react-redux";
import {
  addWeatherInfoOfCity,
  updateSelectedCity,
} from "../features/cities/citiesSlice";

function CityItem({ data }: any) {
  const dispatch = useDispatch();
  //   on click of city show weather data
  const showWeatherData = () => {
    const content = { ...data, selected: true };
    dispatch(updateSelectedCity(content.id));
    dispatch(addWeatherInfoOfCity(content));
  };

  return (
    <div className="block cursor-pointer" onClick={showWeatherData}>
      <h4>{data.city}</h4>
      <span>{(data.weatherData.main.temp - 273.15).toFixed(0)}</span>
    </div>
  );
}

export default CityItem;
