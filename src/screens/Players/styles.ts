import styled from "styled-components/native";

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