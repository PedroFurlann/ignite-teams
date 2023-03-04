import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { useState } from "react";
import { Alert } from "react-native";
import { Container, ContentContainer, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleCreateNewGroup() {
    try {
      if(group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome do Grupo!');
      }

      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo!');
        console.log(error);
      }
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
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleCreateNewGroup}
        />
      </ContentContainer>
    </Container>
  );
}
