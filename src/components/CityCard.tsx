interface cardSchema {
  city: String;
  bookmarked: Boolean;
  weatherData: any;
}

function CityCard({ city, bookmarked, weatherData }: cardSchema) {
  return (
    <div className="border-2 rounded-sm">
      <div className="flex justify-between">
        <h3>{city}</h3>
        <button>Bookmarked</button>
      </div>
      <div className="p-20"></div>
    </div>
  );
}

export default CityCard;
