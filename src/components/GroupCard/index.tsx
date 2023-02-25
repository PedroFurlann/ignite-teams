import { Container, Icon, TextContainer } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface GroupCardProps extends TouchableOpacityProps {
  text: string;
}

export function GroupCard({ text, ...props }: GroupCardProps, ){
  return (
    <Container {...props}>
      <Icon />
      <TextContainer>
        {text}
      </TextContainer>
    </Container>
  )
}