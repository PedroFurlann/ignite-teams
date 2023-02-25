import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;

`;

export const IconBtn = styled.TouchableOpacity`
  flex: 1;
`;

export const LeftArrowIcon = styled(CaretLeft).attrs(({ theme }) => ({ 
  size: 32,
  color: theme.COLORS.WHITE
 }))`

`;