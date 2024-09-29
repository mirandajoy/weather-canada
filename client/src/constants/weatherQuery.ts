import { gql } from "@apollo/client";

export const GET_WEATHER = gql`
  query GetWeather($latitude: Float!, $longitude: Float!) {
    weather(latitude: $latitude, longitude: $longitude) {
      weather_code
      temperature
      precipitation
      cloud_cover
      humidity
      wind_speed
    }
  }
`;
