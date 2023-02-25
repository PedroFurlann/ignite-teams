import { Container, MessageContainer } from "./styles"

interface EmptyListProps {
  message: string
}

export function EmptyList({ message }: EmptyListProps) {
  return (
    <Container>
      <MessageContainer>
        {message}
      </MessageContainer>
    </Container>
  )
}