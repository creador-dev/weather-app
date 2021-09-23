import CityCard from "../components/CityCard";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../features/modal/modalSlice";
import { allSelectedCities } from "../features/cities/citiesSlice";
import AddIcon from "../icons/AddIcon";

function Home() {
  // useSleector to fetch the list of products exists
  const cities = useSelector(allSelectedCities);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal());
  };

  return (
    <div className="pt-10">
      <div className="flex justify-between items-center text-md">
        <h2 className="text-2xl">My Favorite cities</h2>
        <button
          className="bg-gray-50 p-3 px-6 transition text-sm rounded-sm hover:bg-yellow-100"
          onClick={openModal}
        >
          Add new City
          <span className="ml-1">
            <AddIcon />
          </span>
        </button>
      </div>
      {cities.length ? (
        <div className="grid grid-cols-3 gap-y-8 gap-x-6 mt-10">
          {cities.map((data: any) => {
            return data.bookmarked ? (
              <CityCard
                key={data.id}
                city={data.city}
                cityId={data.id}
                bookmarked={data.bookmarked}
                weatherData={data.weatherData}
              ></CityCard>
            ) : (
              ""
            );
          })}
        </div>
      ) : (
        <h2 className="mt-24 text-2xl text-center text-gray-300">
          No city bookmarked
        </h2>
      )}
    </div>
  );
}

export default Home;
