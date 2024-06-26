import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";

import paris from "../data/paris";

function City() {
  const { ville } = useParams();
  const data = useLoaderData();
  const [weather, setWeather] = useState(data);

  const getData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=be2ca3b8b2cc729c8268e5b846ba6853`
    )
      .then((res) => res.json())
      .then((json) => setWeather(json));
  };

  /** Action automatique de react */
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="container">
      <section>
        <h1>{ville}</h1>
        <p>Taux d'humidité : {weather.main.humidity}</p>
        <p>Ciel : {weather.weather[0].description}</p>
        <p>Vitesse du vent: {weather.wind.speed}</p>
      </section>
    </div>
  );
}

export default City;
