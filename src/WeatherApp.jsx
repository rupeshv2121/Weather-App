import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 24.8,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newinfo) => {
    setWeatherInfo(newinfo);
  };
  return (
    <div>
      <SearchBox updateInfo={updateInfo} />
      <br></br>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
