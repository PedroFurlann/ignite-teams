import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
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

        <Button title="Criar" />
      </ContentContainer>
    </Container>
  );
}
