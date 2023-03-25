import {
  Actionsheet,
  Box,
  FlatList,
  Heading,
  NativeBaseProvider,
  Pressable,
  Spinner,
  StatusBar,
  Text,
  useDisclose,
} from "native-base";
import React, { useEffect, useState } from "react";

import { Card } from "./components/Card";
import { CardInfo } from "./components/CardInfo";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});
  const [page, setPage] = useState(1);
  const [hasData, setHasData] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclose();

  function handleInfo(character) {
    setCharacter(character);
    onOpen();
  }

  async function load() {
    if (page) {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      const data = await res.json();
      setCharacters((p) => p.concat(data.results));
      setPage((p) => p + 1);
    } else {
      setHasData(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <NativeBaseProvider>
      <Box>
        <FlatList
          padding={4}
          numColumns={2}
          ListHeaderComponent={
            <>
              <Heading fontSize={"4xl"} textAlign="center">
                Rick and Morty
              </Heading>
              <Text fontSize={"2xl"} textAlign="center">
                Lista de Personagens
              </Text>
            </>
          }
          data={characters}
          renderItem={({ item }) => (
            <Pressable onPress={() => handleInfo(item)}>
              <Card character={item} />
            </Pressable>
          )}
          ListFooterComponent={hasData ? <Spinner size={"lg"}></Spinner> : null}
          onEndReachedThreshold={0.25}
          onEndReached={load}
        />
        <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
          <Actionsheet.Content bgColor={"#3c3e44"}>
            <CardInfo character={character} />
          </Actionsheet.Content>
        </Actionsheet>
      </Box>
      <StatusBar />
    </NativeBaseProvider>
  );
}
