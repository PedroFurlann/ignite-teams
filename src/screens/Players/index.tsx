import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { EmptyList } from "@components/EmptyList";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { PlayerCard } from "@components/PlayerCard";
import { useRoute } from "@react-navigation/native";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { AppError } from "@utils/AppError";
import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import {
  Container,
  FormContainer,
  HeaderList,
  NumberOfPlayers,
} from "./styles";

interface RouteParams {
  group: string;
}

export function Players() {
  const [playerName, setPlayerName] = useState('');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [team, setTeam] = useState("Time A");

  const route = useRoute();
  const { group } = route.params as RouteParams

  async function handleAddNewPlayer() {
    if(playerName.trim().length === 0) {
      return Alert.alert('Novo Jogador', 'Informe o nome do jogador!');
    }

    const newPlayer = {
      name: playerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group);
      fetchPlayersByTeam();

    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert('Novo jogador', error.message)
      } else {
        console.log(error);
        Alert.alert('Novo jogador', 'Não foi possível cadastrar o novo Jogador!')
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);

    } catch (error) {
      console.log(error);
      Alert.alert('Jogadores', 'Não foi possível carregar a lista de jogadores do time selecionado!');
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team])

  return (
    <Container>
      <Header showIconBtn />

      <Highlight
        title={group}
        subtitle="Adicione a galera e separe os times"
      />

      <FormContainer>
        <Input placeholder="Nome do jogador" autoCorrect={false} onChangeText={setPlayerName}  />

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

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard icon="person" name={item.name} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <EmptyList message="Não possuem jogadores cadastrados! Que tal cadastrar novos jogadores?" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
      />

      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  );
}
