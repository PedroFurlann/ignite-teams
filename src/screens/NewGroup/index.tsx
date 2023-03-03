import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Container, ContentContainer, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  function handleNew() {
    navigation.navigate('players', { group })
  }

  return (
    <Container>
      <Header showIconBtn />

      <ContentContainer>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar os participantes"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </ContentContainer>
    </Container>
  );
}
