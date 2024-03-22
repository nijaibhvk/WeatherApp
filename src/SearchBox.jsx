import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./App.css";

import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL; //"https://api.openweathermap.org/data/2.5/weather"; // process.env.REACT_APP_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY; //"e8202fb2d7b82d8aac5fbcb35757dd05"; // process.env.REACT_APP_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        temp_min: jsonResponse.main.temp_min,
        temp_max: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such Place Exists</p>}
      </form>
    </div>
  );
}
