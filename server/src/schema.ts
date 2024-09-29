import { builder } from "./builder.js";
import { WeatherRef } from "./types.js";
import axios from "axios";

const OPEN_METEO_API_BASE_URI = "https://api.open-meteo.com/v1/forecast";
const CURRENT_QUERY_PARAM_VALUES =
  "temperature_2m,relative_humidity_2m,precipitation,weather_code,cloud_cover,wind_speed_10m";

builder.queryType({
  fields: (t) => ({
    weather: t.field({
      type: WeatherRef,
      args: {
        latitude: t.arg.float({ required: true }),
        longitude: t.arg.float({ required: true }),
      },
      resolve: async (_, args) => {
        const { latitude, longitude } = args;
        try {
          const res = await axios.get(
            `${OPEN_METEO_API_BASE_URI}?latitude=${latitude}&longitude=${longitude}&current=${CURRENT_QUERY_PARAM_VALUES}`
          );

          const {
            weather_code,
            temperature_2m: temperature,
            precipitation,
            wind_speed_10m: wind_speed,
            cloud_cover,
            relative_humidity_2m: humidity,
          } = res.data.current;

          return {
            weather_code,
            temperature,
            precipitation,
            wind_speed,
            cloud_cover,
            humidity,
          };
        } catch (error) {
          console.error("Error fetching weather data:", error);
          throw new Error("Failed to fetch weather data");
        }
      },
    }),
  }),
});

export const schema = builder.toSchema({});
