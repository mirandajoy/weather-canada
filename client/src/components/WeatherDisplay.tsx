import { Flex, VStack } from "@chakra-ui/react";
import TempDisplay from "./TempDisplay";
import WeatherTypeDisplay from "./WeatherTypeDisplay";
import BasicWeatherStat from "./BasicWeatherStat";

interface weatherData {
  temperature: number;
  weather_code: number;
  precipitation: number;
  cloud_cover: number;
  humidity: number;
  wind_speed: number;
}

function WeatherDisplay({ weatherData }: { weatherData: weatherData }) {
  const { weather_code, temperature, precipitation, wind_speed, cloud_cover, humidity } = weatherData;

  return (
    <VStack spacing="4" width="100%">
      <Flex width="100%" align="stretch" justify="center" gap="4">
        <WeatherTypeDisplay weatherTypeCode={weather_code} />
        <TempDisplay temperature={temperature} weatherTypeCode={weather_code} />
      </Flex>
      <Flex width="100%" gap="4">
        <BasicWeatherStat label="Precipiation" value={precipitation} unit="mm" />
        <BasicWeatherStat label="Wind Speed" value={wind_speed} unit="km/h" />
        <BasicWeatherStat label="Cloud Cover" value={cloud_cover} unit="%" />
        <BasicWeatherStat label="Humidity" value={humidity} unit="%" />
      </Flex>
    </VStack>
  );
}

export default WeatherDisplay;
