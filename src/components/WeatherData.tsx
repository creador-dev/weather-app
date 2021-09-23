interface weatherSchema {
  data: any;
}

function WeatherData({ data }: weatherSchema) {
  const icon = data.weather[0].icon;
  const weather_forecast = data.weather[0].main;
  const temp = data.main.temp;
  const humidity = data.main.humidity;
  const wind_speed = data.wind.speed;
  return (
    <>
      <div className="col-span-full">
        <img
          className="m-auto"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={weather_forecast}
        />
      </div>
      <div>Temperature: {Math.round(temp)}°C</div>
      <div>Humidity: {humidity}</div>
      <div>Weather: {weather_forecast}</div>
      <div>Wind speed: {Math.round(wind_speed * 6)} km/h</div>
    </>
  );
}

export default WeatherData;
