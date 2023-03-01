import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { PlayerCard } from "@components/PlayerCard";
import { useState } from "react";
import { FlatList } from "react-native";
import {
  Container,
  FormContainer,
  HeaderList,
  NumbersOfPlayers,
} from "./styles";

export function Players() {
  const [players, setPlayers] = useState<string[]>(['Furlan', 'Zeca']);
  const [team, setTeam] = useState("Time A");

  return (
    <Container>
      <Header showIconBtn />

      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <FormContainer>
        <Input placeholder="Nome do jogador" autoCorrect={false} />

        <ButtonIcon icon="add" />
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

        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList 
        data={players} 
        keyExtractor={(item) => item} 
        renderItem={({ item }) => (
          <PlayerCard icon="person" name={item} onRemove={() => {}} />
        )}
      />
    </Container>
  );
}
