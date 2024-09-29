import GeneralWeather from "./components/GeneralWeather";
import LocalWeather from "./components/LocalWeather";
import { VStack } from "@chakra-ui/react";

function App() {
  return (
    <VStack margin="24" spacing="32">
      <LocalWeather />
      <GeneralWeather />
    </VStack>
  );
}

export default App;
