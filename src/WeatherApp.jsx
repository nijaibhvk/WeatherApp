import WeatherInfo from "./WeatherInfo";

import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Mumbai",
    feels_like: 29.57,
    humidity: 39,
    temp: 29.99,
    temp_max: 29.99,
    temp_min: 29.94,
    weather: "smoke",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Weather App</h3>
      <SearchBox updateInfo={updateInfo} />
      <WeatherInfo info={weatherInfo} />
    </div>
  );
}
