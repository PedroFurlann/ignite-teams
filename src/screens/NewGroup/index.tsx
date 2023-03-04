import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { useState } from "react";
import { Container, ContentContainer, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handleCreateNewGroup() {
    try {
      await groupCreate(group);
      navigation.navigate('players', { group })

    } catch (error) {
      console.log(error);
    }
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
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleCreateNewGroup} />
      </ContentContainer>
    </Container>
  );
}
