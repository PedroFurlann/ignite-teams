import { TouchableOpacityProps } from "react-native";
import { Container, FilterStyleProps, TitleContainer } from "./styles";

interface FilterProps extends TouchableOpacityProps, FilterStyleProps {
  title: string;
}

export function Filter({ title, isActived = false, ...props }: FilterProps) {
  return (
    <Container {...props} isActived={isActived}>
      <TitleContainer>{title}</TitleContainer>
    </Container>
  )
}