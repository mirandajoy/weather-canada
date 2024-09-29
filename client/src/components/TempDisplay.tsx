import { Center, Text, Flex } from "@chakra-ui/react";
import { weatherTypes } from "../constants/weatherTypes";

function TempDisplay({ temperature, weatherTypeCode }: { temperature: number; weatherTypeCode: number }) {
  return (
    <Center
      borderRadius="lg"
      padding="8"
      width="100%"
      bgGradient={weatherTypes.get(weatherTypeCode)?.backgroundGradient}
    >
      <Flex align="baseline" gap="1">
        <Text fontSize="5xl" fontWeight="semibold">
          {temperature}
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          °C
        </Text>
      </Flex>
    </Center>
  );
}

export default TempDisplay;
