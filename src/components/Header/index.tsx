import { Container, IconBtn, LeftArrowIcon, Logo } from "./styles";

import logo from '@assets/logo.png'

interface HeaderProps {
  showIconBtn?: boolean;
}

export function Header({ showIconBtn = false }: HeaderProps) {
  return (
    <Container>
      {showIconBtn && (
        <IconBtn>
          <LeftArrowIcon />
        </IconBtn>
      )}
      
      <Logo source={logo} />
    </Container>
  );
}
