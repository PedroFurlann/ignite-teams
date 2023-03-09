import { ButtonIcon } from "@components/ButtonIcon"
import { Container, MessageContainer } from "./styles"

interface EmptyListProps {
  message?: string
  addBtn?: boolean
  onReturnScreen?: () => void;
}

export function EmptyList({ message, addBtn, onReturnScreen }: EmptyListProps) {
  return (
    <Container>
      <MessageContainer>
        {message}
      </MessageContainer>

    {addBtn && (
      <ButtonIcon icon="add-circle-outline" type="PRIMARY" onPress={onReturnScreen} />
    )}
    </Container>
  )
}