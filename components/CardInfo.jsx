import { CircleIcon, HStack, Text, VStack } from "native-base";

const colorStatus = {
  Alive: "emerald.500",
  Dead: "red.500",
  unknown: "gray.500",
};

export const CardInfo = ({ character }) => {
  return (
    <VStack bgColor={"#3c3e44"} p={4} w={"full"}>
      <Text fontSize={32} fontWeight={"bold"} color={"white"}>
        {character.name}
      </Text>
      <HStack space="3" alignItems="center">
        <CircleIcon size="5" mt="0.5" color={colorStatus[character.status]} />
        <Text fontSize={18} fontWeight={"bold"} color={"white"}>
          {character.status} - {character.species}
        </Text>
      </HStack>
      <Text fontSize={20} fontWeight={"semibold"} mt={4} color={"muted.400"}>
        Last known location:
      </Text>
      <Text fontSize={24} color={"white"}>
        {character.location.name}
      </Text>
      <Text fontSize={20} fontWeight={"semibold"} mt={4} color={"muted.400"}>
        First seen in:
      </Text>
      <Text fontSize={24} color={"white"}>
        {character.origin.name}
      </Text>
    </VStack>
  );
};
