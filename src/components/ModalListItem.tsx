import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { hideModal } from "../features/modal/modalSlice";
import { addToList, allSelectedCities } from "../features/cities/citiesSlice";
import AddIcon from "../icons/AddIcon";

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
      const loc = content.location;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}&units=metric`;
      axios.get(url).then((res) => {
        content.weatherData = res.data;
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
      className="flex justify-between text-left w-full p-3 my-3 rounded-md cursor-pointer border hover:bg-gray-200"
    >
      <span>{content.city}</span>
      <AddIcon />
    </button>
  );
}

export default ModalListItem;
