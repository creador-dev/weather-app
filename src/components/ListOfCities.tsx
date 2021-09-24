import { useDispatch, useSelector } from "react-redux";
import { allSelectedCities } from "../features/cities/citiesSlice";
import { showModal } from "../features/modal/modalSlice";
import AddIcon from "../icons/AddIcon";
import CityItem from "./CityItem";

function ListOfCities() {
  // list of all slected cities
  const cities = useSelector(allSelectedCities);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal());
  };

  return (
    <>
      <div className="flex justify-between items-center pb-3 border-b mb-6">
        <h2 className="text-2xl">Cities</h2>
        <button
          className="bg-gray-50 p-3 transition text-sm rounded-sm hover:bg-yellow-100"
          onClick={openModal}
          title="Add city"
        >
          <AddIcon />
        </button>
      </div>
      {cities.length ? (
        <div>
          {cities.map((data: any) => {
            return <CityItem key={data.id} data={data} />;
          })}
        </div>
      ) : (
        <h2 className="text-2xl text-center text-gray-300">No city added</h2>
      )}
    </>
  );
}

export default ListOfCities;
