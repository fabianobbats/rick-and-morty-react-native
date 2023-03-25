import { AspectRatio, Box, Image, Text, VStack, ZStack } from "native-base";

const colorStatus = {
  Alive: "emerald.500",
  Dead: "red.500",
  unknown: "gray.500",
};

export const Card = ({ character }) => {
  return (
    <Box
      w={"240px"}
      bg={colorStatus[character.status]}
      p={2}
      mb={2}
      ml={2}
      mr="auto"
      borderWidth={2}
      borderStyle={"solid"}
      borderRadius={8}
    >
      <VStack p={1} borderWidth={2} borderStyle={"dashed"} borderRadius={8}>
        <Text fontSize={20} fontWeight={"bold"} textAlign={"center"}>
          {character.species}
        </Text>
        <AspectRatio ratio={{ base: 1 }} width={{ base: "full" }}>
          <Image
            borderRadius={8}
            source={{
              uri: `${character.image}`,
            }}
            alt="Alternate Text"
            resizeMode="contain"
          />
        </AspectRatio>
        <Text fontSize={24} fontWeight={800} textAlign={"center"}>
          {character.name.length > 15
            ? character.name.substring(0, 12) + "..."
            : character.name}
        </Text>
      </VStack>
    </Box>
  );
};
