import { Container, IconBtn, LeftArrowIcon, Logo } from "./styles";

import logo from '@assets/logo.png'
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  showIconBtn?: boolean;
}

export function Header({ showIconBtn = false }: HeaderProps) {
  const navigation = useNavigation();
  
  function handleGoHome() {
    navigation.navigate('groups');
  }

  return (
    <Container>
      {showIconBtn && (
        <IconBtn onPress={handleGoHome}>
          <LeftArrowIcon />
        </IconBtn>
      )}
      
      <Logo source={logo} />
    </Container>
  );
}
