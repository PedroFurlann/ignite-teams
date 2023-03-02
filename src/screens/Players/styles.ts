import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const FormContainer = styled.View`
  width: 100%;
  background-color: ${(props) => props.theme.COLORS.GRAY_700};
  border-radius: 8px;

  flex-direction: row;
  justify-content: center;
`;

export const HeaderList = styled.View`
  width: 100%;
  margin: 32px 0px 12px;

  flex-direction: row;
  align-items: center;
`;

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;