import { Center, Text, VStack } from "@chakra-ui/react";
import { weatherTypes } from "../constants/weatherTypes";

function WeatherTypeDisplay({ weatherTypeCode }: { weatherTypeCode: number }) {
  return (
    <Center
      borderRadius="lg"
      padding="8"
      width="100%"
      bgGradient={weatherTypes.get(weatherTypeCode)?.backgroundGradient}
    >
      <VStack spacing="2">
        <Text className="material-symbols-outlined" fontSize="5xl" color={weatherTypes.get(weatherTypeCode)?.iconColor}>
          {weatherTypes.get(weatherTypeCode)?.icon}
        </Text>
        <Text textAlign="center" fontWeight="bold">
          {weatherTypes.get(weatherTypeCode)?.description}
        </Text>
      </VStack>
    </Center>
  );
}

export default WeatherTypeDisplay;
