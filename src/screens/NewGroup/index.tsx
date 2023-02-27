import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, ContentContainer, Icon } from "./styles";

export function NewGroup() {
  return (
    <Container>
      <Header showIconBtn />

      <ContentContainer>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar os participantes"
        />

        <Input placeholder="Nome da turma" />
        <Button title="Criar" style={{ marginTop: 20 }}/>
      </ContentContainer>
    </Container>
  );
}
