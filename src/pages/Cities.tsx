import ListOfCities from "../components/ListOfCities";
import WeatherInfoCard from "../components/WeatherInfoCard";

function Cities() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <ListOfCities />
        </div>
        <div>
          <WeatherInfoCard />
        </div>
      </div>
    </div>
  );
}

export default Cities;
