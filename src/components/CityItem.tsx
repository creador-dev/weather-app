import { useDispatch } from "react-redux";
import {
  addWeatherInfoOfCity,
  updateSelectedCity,
} from "../features/cities/citiesSlice";
import axios from "axios";

function CityItem({ data }: any) {
  const dispatch = useDispatch();

  // open weather api key
  const apiKey = "d4b9fedc669894ea03bdbbc9a08abd68";
  //   on click of city show weather data
  const showWeatherData = () => {
    // open weather api to get weather data
    const loc = data.location;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}&units=metric`;
    axios.get(url).then((res) => {
      const content = { ...data, selected: true, weatherData: res.data };
      dispatch(updateSelectedCity(content));
      dispatch(addWeatherInfoOfCity(content));
    });
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
