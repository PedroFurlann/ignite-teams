import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export interface FilterStyleProps {
  isActived?: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActived }) => isActived && css`
    border: 1px solid ${theme.COLORS.GREEN_700};
  `}

  border-radius: 8px;
  margin-right: 12px;
  height: 38px;
  width: 70px;

  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}

  text-transform: uppercase;
`;