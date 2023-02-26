import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, TitleContainer } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type = 'PRIMARY', ...props }: ButtonProps) {
  return (
    <Container type={type} {...props}>
      <TitleContainer>
        {title}
      </TitleContainer>
    </Container>
  )
}