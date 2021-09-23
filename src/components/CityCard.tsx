import BookmarkButton from "./BookmarkButton";
import WeatherData from "./WeatherData";
interface cardSchema {
  city: String;
  bookmarked: Boolean;
  cityId: number;
  weatherData: any;
}

function CityCard({ city, bookmarked, cityId, weatherData }: cardSchema) {
  return (
    <div className="border-2 rounded-md p-4 transition-shadow hover:shadow-xl hover:filter hover:backdrop-blur-lg cursor-pointer">
      <div className="flex justify-between items-center pb-2 border-b">
        <h3>{city}</h3>
        <BookmarkButton bookmarked={bookmarked} cityId={cityId} />
      </div>
      <div className="mt-4 grid grid-cols-2 text-sm gap-4">
        <WeatherData data={weatherData} />
      </div>
    </div>
  );
}

export default CityCard;
