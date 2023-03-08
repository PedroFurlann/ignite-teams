import { Container, Icon, NameContainer } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'
import { ButtonIcon } from "@components/ButtonIcon";

interface PlayerCardProps {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  onRemove: () => void;
}

export function PlayerCard({ name, icon, onRemove }: PlayerCardProps) {
  return (
    <Container>
      <Icon name={icon} />

      <NameContainer>
        {name}
      </NameContainer>

      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
}