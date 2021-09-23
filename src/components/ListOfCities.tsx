import { useDispatch, useSelector } from "react-redux";
import { allSelectedCities } from "../features/cities/citiesSlice";
import { showModal } from "../features/modal/modalSlice";
import CityItem from "./CityItem";

function ListOfCities() {
  // list of all slected cities
  const cities = useSelector(allSelectedCities);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal());
  };

  return (
    <div className="p-2">
      <div className="flex justify-between">
        <h3>Cities</h3>
        <button onClick={openModal}>Add city</button>
      </div>
      <div>
        {cities.map((data: any) => {
          return <CityItem key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
}

export default ListOfCities;
