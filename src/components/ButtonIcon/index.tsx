import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";

interface ButtonIconProps extends TouchableOpacityProps {
}

export function ButtonIcon({  }: ButtonIconProps) {
  return (
    <Container>
      <Icon name="home" size={32} type="PRIMARY" />
    </Container>
  )
}