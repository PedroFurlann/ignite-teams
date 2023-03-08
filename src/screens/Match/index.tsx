import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RouteParams } from "@screens/Players";
import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import {
  Container,
  HeaderListContainer,
  ListContainer,
  NumberOfPointsContainer,
  TitleContainer,
} from "./styles";

import { playersGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { EmptyList } from "@components/EmptyList";
import { MatchPlayerCard } from "@components/MatchPlayerCard";
import { Button } from "@components/Button";

export function Match() {
  const [pointsCounterTeamA, setPointsCounterTeamA] = useState(0);
  const [pointsCounterTeamB, setPointsCounterTeamB] = useState(0);
  const [playersTeamA, setPlayersTeamA] = useState<PlayerStorageDTO[]>([]);
  const [playersTeamB, setPlayersTeamB] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;
  
  const navigator = useNavigation();

  function handleAddOnePointTeamA() {
    setPointsCounterTeamA((state) => state + 1);
  }

  function handleRemoveOnePointTeamA() {
    if (pointsCounterTeamA === 0) {
      return Alert.alert(
        "Pontuação",
        "Não é possível diminuir a pontuação para um número menor que zero!"
      );
    }

    setPointsCounterTeamA((state) => state - 1);
  }

  function handleAddOnePointTeamB() {
    setPointsCounterTeamB((state) => state + 1);
  }

  function handleRemoveOnePointTeamB() {
    if (pointsCounterTeamB === 0) {
      return Alert.alert(
        "Pontuação",
        "Não é possível diminuir a pontuação para um número menor que zero!"
      );
    }

    setPointsCounterTeamB((state) => state - 1);
  }

  function handleReturnToPlayers(group: string) {
    navigator.navigate("players", { group })
  }

  async function fetchPlayersByTeamA() {
    try {
      // setIsLoading(true);

      const playersTeamA = await playersGetByGroupAndTeam(group, "Time A");

      setPlayersTeamA(playersTeamA);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Jogadores",
        "Não foi possível carregar a lista de jogadores do time selecionado!"
      );
    }
    //   finally {
    // //   setIsLoading(false);

    // // }
  }

  async function fetchPlayersByTeamB() {
    try {
      // setIsLoading(true);

      const playersTeamB = await playersGetByGroupAndTeam(group, "Time B");

      setPlayersTeamB(playersTeamB);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Jogadores",
        "Não foi possível carregar a lista de jogadores do time selecionado!"
      );
    }
    //   finally {
    // //   setIsLoading(false);

    // // }
  }

  useEffect(() => {
    fetchPlayersByTeamA();
    fetchPlayersByTeamB();
  }, []);

  return (
    <Container>
      <Header />

      <Highlight title={group} subtitle="Marque a pontuação da sua partida!" />

      <HeaderListContainer>
        <TitleContainer>Time A</TitleContainer>
        <ButtonIcon
          icon="add"
          type="PRIMARY"
          style={{ width: 20 }}
          onPress={handleAddOnePointTeamA}
        />

        <ButtonIcon
          icon="remove"
          type="SECONDARY"
          style={{ width: 20, marginRight: 20 }}
          onPress={handleRemoveOnePointTeamA}
        />

        <NumberOfPointsContainer>
          {pointsCounterTeamA}X{pointsCounterTeamB}
        </NumberOfPointsContainer>

        <ButtonIcon
          icon="add"
          type="PRIMARY"
          style={{ width: 20, marginLeft: 20 }}
          onPress={handleAddOnePointTeamB}
        />

        <ButtonIcon
          icon="remove"
          type="SECONDARY"
          style={{ width: 20, marginRight: 20 }}
          onPress={handleRemoveOnePointTeamB}
        />

        <TitleContainer>Time B</TitleContainer>
      </HeaderListContainer>

      <ListContainer>
        <FlatList
          data={playersTeamA}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <MatchPlayerCard icon="person" name={item.name} />
          )}
          ListEmptyComponent={() => (
            <EmptyList message="Não possuem jogadores cadastrados! Que tal cadastrar novos jogadores?" />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{ marginLeft: 20 }]}
        />
        <FlatList
          data={playersTeamB}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <MatchPlayerCard icon="person" name={item.name} />
          )}
          ListEmptyComponent={() => (
            <EmptyList message="Não possuem jogadores cadastrados! Que tal cadastrar novos jogadores?" />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{ marginLeft: 40, marginRight: -20 }]}
        />
      </ListContainer>

      <Button
        title="Encerrar partida"
        type="SECONDARY"
        onPress={() => handleReturnToPlayers(group)}
        style={{ marginLeft: 16, marginRight: 16, marginTop: 100 }}
      />
    </Container>
  );
}
