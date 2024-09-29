import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import { Heading, VStack, Text } from "@chakra-ui/react";
import { GET_WEATHER } from "../constants/weatherQuery";

interface geoCoordinates {
  latitude: Number;
  longitude: Number;
}

function LocalWeather() {
  const [localCoordinates, setLocalCoordinates] = useState<geoCoordinates | null>(null);
  const [unableToDetmerineLocation, setUnableToDetermineLocation] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocalCoordinates({ latitude, longitude });
      },
      () => {
        // this function will only run if the user's location is unable to be determined
        setUnableToDetermineLocation(true);
      }
    );
  }, []);

  const { loading, error, data } = useQuery(GET_WEATHER, {
    variables: localCoordinates ?? { latitude: 0, longitude: 0 },
    skip: localCoordinates === null,
  });

  return (
    <VStack minW="60%">
      <Heading marginBottom="4">Your Local Weather</Heading>
      {localCoordinates === null ? (
        <VStack>
          <Text>Determining your location...</Text>
        </VStack>
      ) : unableToDetmerineLocation ? (
        <Text>Unfortunately, we were unable to determine your location</Text>
      ) : loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>There was an error loading your local weather: {error.message}</Text>
      ) : (
        <WeatherDisplay weatherData={data.weather} />
      )}
    </VStack>
  );
}

export default LocalWeather;
