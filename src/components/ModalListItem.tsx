import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { hideModal } from "../features/modal/modalSlice";
import { addToList, allSelectedCities } from "../features/cities/citiesSlice";

function ModalListItem({ content }: any) {
  const dispatch = useDispatch();
  const currentCitiesList = useSelector(allSelectedCities);

  const apiKey = "d4b9fedc669894ea03bdbbc9a08abd68";

  //   add city to list on click
  const addCityToList = () => {
    const cityExistInArray = currentCitiesList.find(
      (data: any) => data.id === content.id
    );

    if (!cityExistInArray) {
      // open weather api to get weather data
      const loc = content.city;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
      axios.get(url).then((res) => {
        content.weatherData = res.data;
        content.bookmarked = false;
        content.selected = false;
        // dispatch function
        dispatch(hideModal());
        dispatch(addToList(content));
      });
    } else {
      alert("Already exists in the list.");
    }
  };

  return (
    <button
      onClick={addCityToList}
      className="block text-left w-full py-3 cursor-pointer"
    >
      {content.city}
    </button>
  );
}

export default ModalListItem;
