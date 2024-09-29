import { builder } from "./builder.js";

interface Weather {
  weather_code: number;
  temperature: number;
  precipitation: number;
  wind_speed: number;
  cloud_cover: number;
  humidity: number;
}

export const WeatherRef = builder.objectRef<Weather>("Weather");

WeatherRef.implement({
  fields: (t) => ({
    weather_code: t.exposeInt("weather_code"),
    temperature: t.exposeFloat("temperature"),
    precipitation: t.exposeFloat("precipitation"),
    wind_speed: t.exposeFloat("wind_speed"),
    cloud_cover: t.exposeInt("cloud_cover"),
    humidity: t.exposeInt("humidity"),
  }),
});
