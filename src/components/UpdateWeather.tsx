import RefreshIcon from "../icons/RefreshIcon";
import { useDispatch } from "react-redux";
import {
  addWeatherInfoOfCity,
  updateSelectedCity,
} from "../features/cities/citiesSlice";
import axios from "axios";

interface updateSchema {
  data: any;
}

function UpdateWeather({ data }: updateSchema) {
  const dispatch = useDispatch();

  // open weather api key
  const apiKey = "YOUR_API_KEY";

  const UpdateWeather = () => {
    // open weather api to get weather data
    const loc = data.location;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}&units=metric`;
    axios.get(url).then((res) => {
      const content = { ...data, weatherData: res.data };
      dispatch(updateSelectedCity(content));
      dispatch(addWeatherInfoOfCity(content));
    });
  };
  return (
    <button
      className="bg-gray-50 p-3 mr-2 transition text-sm rounded-sm hover:bg-yellow-100"
      onClick={UpdateWeather}
      title="Update weather"
    >
      <RefreshIcon />
    </button>
  );
}

export default UpdateWeather;
