import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, FormContainer } from "./styles";

export function Players() {
  return (
    <Container>
      <Header showIconBtn />

      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <FormContainer>
        <Input
          placeholder="Nome do jogador"
          autoCorrect={false}
        />
        
        <ButtonIcon icon="add" />
      </FormContainer>
    </Container>
  );
}
