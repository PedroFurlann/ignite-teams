import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { EmptyList } from "@components/EmptyList";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Loading } from "@components/Loading";
import { PlayerCard } from "@components/PlayerCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { AppError } from "@utils/AppError";
import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import {
  Container,
  FooterContainer,
  FormContainer,
  HeaderList,
  NumberOfPlayers,
} from "./styles";

export interface RouteParams {
  group: string;
}

export function Players() {
  const [isLoading, setIsLoading] = useState(true);
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [team, setTeam] = useState("Time A");

  const navigaton = useNavigation();
  const route = useRoute();
  const { group } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddNewPlayer() {
    if (playerName.trim().length === 0) {
      return Alert.alert("Novo Jogador", "Informe o nome do jogador!");
    }

    const newPlayer = {
      name: playerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);
      newPlayerNameInputRef.current?.blur();
      setPlayerName("");
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo jogador", error.message);
      } else {
        console.log(error);
        Alert.alert(
          "Novo jogador",
          "Não foi possível cadastrar o novo Jogador!"
        );
      }
    }
  }

  function handleGoToTheMatch() {
    if(players.length <= 1) {
      return Alert.alert("Jogadores", "Adicione pelo menos um jogador em cada time para começar a partida!")
    }

    navigaton.navigate("match", { group })
  }

  async function handlePlayerRemove(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Remover Jogador",
        `Não foi possível remover o jogador${playerName}!`
      );
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group);
      navigaton.navigate("groups");
    } catch (error) {
      console.log(error);
      Alert.alert("Remover", "Não foi possível remover o grupo.");
    }
  }

  async function handleGroupRemove() {
    Alert.alert("Remover", `Deseja remover o grupo ${group}?`, [
      {
        text: "Sim",
        onPress: () => groupRemove(),
      },

      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  async function fetchPlayersByTeam() {
    try {
      setIsLoading(true);

      const playersByTeam = await playersGetByGroupAndTeam(group, team);

      setPlayers(playersByTeam);

    } catch (error) {
      console.log(error);
      Alert.alert(
        "Jogadores",
        "Não foi possível carregar a lista de jogadores do time selecionado!"
      );

    } finally {
      setIsLoading(false);

    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showIconBtn />

      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <FormContainer>
        <Input
          placeholder="Nome do jogador"
          autoCorrect={false}
          onChangeText={setPlayerName}
          value={playerName}
          inputRef={newPlayerNameInputRef}
          onSubmitEditing={handleAddNewPlayer}
          returnKeyType="done"
        />

        <ButtonIcon icon="add" onPress={handleAddNewPlayer} />
      </FormContainer>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActived={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              icon="person"
              name={item.name}
              onRemove={() => handlePlayerRemove(item.name)}
            />
          )}
          ListEmptyComponent={() => (
            <EmptyList message="Não possuem jogadores cadastrados! Que tal cadastrar novos jogadores?" />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 },
          ]}
        />
      )}
      <FooterContainer>
        <Button
          title="Remover Turma"
          type="SECONDARY"
          onPress={handleGroupRemove}
        />

        <Button 
          title="Ir para a Partida"
          style={{ marginLeft: 12 }}
          onPress={handleGoToTheMatch}
        />
      </FooterContainer>
    </Container>
  );
}
