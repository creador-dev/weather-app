import BookmarkButton from "./BookmarkButton";

interface cardSchema {
  city: String;
  bookmarked: Boolean;
  cityId: number;
  weatherData: any;
}

function CityCard({ city, bookmarked, cityId, weatherData }: cardSchema) {
  return (
    <div className="border-2 rounded-sm">
      <div className="flex justify-between">
        <h3>{city}</h3>
        <BookmarkButton bookmarked={bookmarked} cityId={cityId} />
      </div>
      <div className="p-20"></div>
    </div>
  );
}

export default CityCard;
