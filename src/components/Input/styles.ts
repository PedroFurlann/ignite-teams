import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  border-radius: 8px;
  padding: 16px;
`;
