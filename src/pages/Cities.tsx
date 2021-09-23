import ListOfCities from "../components/ListOfCities";
import WeatherInfoCard from "../components/WeatherInfoCard";

function Cities() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 -mt-3 pt-10 h-screen">
        <div className="col-span-4 border-2 p-3">
          <ListOfCities />
        </div>
        <div className="col-span-8 border-2 p-3">
          <WeatherInfoCard />
        </div>
      </div>
    </div>
  );
}

export default Cities;
