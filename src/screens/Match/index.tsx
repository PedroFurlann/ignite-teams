import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { useState } from "react";
import { Alert } from "react-native";
import {
  Container,
  HeaderListContainer,
  NumberOfPointsContainer,
  TitleContainer,
} from "./styles";

export function Match() {
  const [pointsCounterTeamA, setPointsCounterTeamA] = useState(0);
  const [pointsCounterTeamB, setPointsCounterTeamB] = useState(0);

  function handleAddOnePointTeamA() {
    setPointsCounterTeamA((state) => state + 1);
  }

  function handleRemoveOnePointTeamA() {
    if (pointsCounterTeamA === 0) {
      return Alert.alert(
        "Pontuação",
        "Não é possível diminuir a pontuação para um número menor que zero!"
      );
    }

    setPointsCounterTeamA((state) => state - 1);
  }

  function handleAddOnePointTeamB() {
    setPointsCounterTeamB((state) => state + 1);
  }

  function handleRemoveOnePointTeamB() {
    if (pointsCounterTeamB === 0) {
      return Alert.alert(
        "Pontuação",
        "Não é possível diminuir a pontuação para um número menor que zero!"
      );
    }

    setPointsCounterTeamB((state) => state - 1);
  }

  return (
    <Container>
      <Header />
      <HeaderListContainer>
        <TitleContainer>Time A</TitleContainer>
        <ButtonIcon
          icon="add"
          type="PRIMARY"
          style={{ width: 20 }}
          onPress={handleAddOnePointTeamA}
        />
        <ButtonIcon
          icon="remove"
          type="SECONDARY"
          style={{ width: 20, marginRight: 40 }}
          onPress={handleRemoveOnePointTeamA}
        />
        <NumberOfPointsContainer>
          {pointsCounterTeamA}X{pointsCounterTeamB}
        </NumberOfPointsContainer>
        <ButtonIcon
          icon="add"
          type="PRIMARY"
          style={{ width: 20, marginLeft: 30 }}
          onPress={handleAddOnePointTeamB}
        />
        <ButtonIcon
          icon="remove"
          type="SECONDARY"
          style={{ width: 20, marginRight: 20 }}
          onPress={handleRemoveOnePointTeamB}
        />
        <TitleContainer>Time B</TitleContainer>
      </HeaderListContainer>
    </Container>
  );
}
