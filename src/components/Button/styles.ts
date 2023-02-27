import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

interface ButtonProps {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;
  justify-content: center;
  align-items: center;

  min-height: 56px;
  max-height: 56px;

  background-color: ${(props) =>
    props.type === "PRIMARY"
      ? props.theme.COLORS.GREEN_700
      : props.theme.COLORS.RED_DARK};

  border-radius: 8px;
`;

export const TitleContainer = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
