import CityCard from "../components/CityCard";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../features/modal/modalSlice";
import { allSelectedCities } from "../features/cities/citiesSlice";

function Home() {
  // useSleector to fetch the list of products exists
  const cities = useSelector(allSelectedCities);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal());
  };

  return (
    <div>
      <div className="flex justify-between items-center text-md">
        <h1>My Favorite cities</h1>
        <button
          className="bg-gray-50 p-3 text-sm rounded-sm hover:bg-blue-200"
          onClick={openModal}
        >
          Add new City
        </button>
      </div>
      {cities.length ? (
        <div className="grid grid-cols-2 gap-4">
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
        ""
      )}
    </div>
  );
}

export default Home;
