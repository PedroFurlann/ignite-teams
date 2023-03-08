import { Container, Icon, NameContainer } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'

interface PlayerCardProps {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export function MatchPlayerCard({ name, icon }: PlayerCardProps) {
  return (
    <Container>
      <Icon name={icon} />

      <NameContainer>
        {name}
      </NameContainer>

    </Container>
  );
}