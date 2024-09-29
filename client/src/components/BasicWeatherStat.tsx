import { Center, Text, Flex, Heading, Box } from "@chakra-ui/react";

interface WeatherStat {
  label: string;
  value: number;
  unit: string;
}

function BasicWeatherStat({ label, value, unit }: WeatherStat) {
  return (
    <Center border="1px" borderRadius="lg" paddingX="4" paddingY="6" width="100%">
      <Box textAlign="center">
        <Heading fontSize="sm" marginBottom="1">
          {label}
        </Heading>
        <Flex align="baseline" gap="1" justify="center">
          <Text fontSize="lg">{value}</Text>
          <Text fontSize="md">{unit}</Text>
        </Flex>
      </Box>
    </Center>
  );
}

export default BasicWeatherStat;
