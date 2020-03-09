import React, { useState, useEffect } from "react";
import "./WeatherStyles.css";
import Title from "./Title/Title";
import Input from "./Input/Input";
import Info from "./Info/Info";
import { INITIAL_DATA_VALUE, API_KEY } from "../constants";

const getWeatherData = (city, callback, callbackError) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
  )
    .then(res => res.json())
    .then(result => {
      callback(result);
    })
    .catch(() => callbackError(true));
};

function Weather() {
  const [data, setData] = useState(INITIAL_DATA_VALUE);
  const [city, setCity] = useState(INITIAL_DATA_VALUE);
  const [isError, setIsError] = useState(false);

  const handleSubmit = tempCity => {
    setCity(tempCity);
    setData(INITIAL_DATA_VALUE);
  };

  useEffect(() => {
    if (data === INITIAL_DATA_VALUE) {
      getWeatherData(city, setData, setIsError);
    }
  }, [data, city]);

  return (
    <div className="temperatureInfo">
      <Title city={city} />
      <Input handleSubmit={handleSubmit} setCity={setCity} />
      <Info data={data} city={city} error={isError} />
    </div>
  );
}

export default Weather;
