import { useQuery } from "@apollo/client";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  VStack,
  Center,
  Text,
  Image,
  Flex,
  AspectRatio,
} from "@chakra-ui/react";
import { useState } from "react";
import { canadaCities } from "../constants/cityData";
import WeatherDisplay from "./WeatherDisplay";
import { GET_WEATHER } from "../constants/weatherQuery";

interface cityLocationDetails {
  id: Number;
  name: string;
  latitude: Number;
  longitude: Number;
  image: string;
}

function GeneralWeather() {
  const [activeCity, setActiveCity] = useState<cityLocationDetails>({
    id: 1,
    name: "Vancouver",
    latitude: 49.282729,
    longitude: -123.120738,
    image: "bc.jpg",
  });

  const { loading, error, data } = useQuery(GET_WEATHER, {
    variables: { latitude: activeCity.latitude, longitude: activeCity.longitude },
  });

  return (
    <VStack>
      <Heading marginBottom="4">Explore the Weather Across Canada</Heading>
      <Tabs variant="soft-rounded" onChange={(index) => setActiveCity(canadaCities[index])}>
        <TabList>
          {canadaCities.map((city, index) => (
            <Tab key={index}>{city.name}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {canadaCities.map((_city, index) => (
            <TabPanel key={index}>
              <Center marginTop="6">
                {loading ? (
                  <Text marginTop="8">Loading...</Text>
                ) : error ? (
                  <Text marginTop="8">
                    There was an error loading the weather for {activeCity.name}: {error.message}
                  </Text>
                ) : (
                  <Flex gap="4">
                    <AspectRatio w="400px" ratio={4 / 3}>
                      <Image src={activeCity.image} alt={activeCity.name} objectFit="cover" borderRadius="lg" />
                    </AspectRatio>
                    <WeatherDisplay weatherData={data.weather} />
                  </Flex>
                )}
              </Center>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </VStack>
  );
}

export default GeneralWeather;
