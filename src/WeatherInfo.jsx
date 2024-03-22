import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import "./WeatherInfo.css";

import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function WeatherInfo({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1624212933920-1a1e703274ed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const COLD_URL =
    "https://images.unsplash.com/photo-1544274411-a7afe6230711?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="InfoBox">
      <div className="Container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Humidity: {info.humidity}</p>
              <p>Min Temp: {info.temp_min}&deg;C</p>
              <p>Max Temp: {info.temp_max}&deg;C</p>
              <p>
                The weather can be described as{" "}
                <b>
                  <i>{info.weather}</i>
                </b>{" "}
                and feels like {info.feels_like}&deg;C{" "}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
