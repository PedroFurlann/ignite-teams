import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { useState } from "react";
import { Container, HeaderList, NumberOfPointsContainer, TitleContainer } from "./styles";

export function Match() {
  const [pointsCounterTeamA, setPointsCounterTeamA] = useState(0);
  const [pointsCounterTeamB, setPointsCounterTeamB] = useState(0);


  return (
    <Container>
      <Header />
      <HeaderList>
        <TitleContainer>Team A</TitleContainer>
        <ButtonIcon icon="add" type="PRIMARY" />
        <NumberOfPointsContainer>
          {pointsCounterTeamA}
          X
          {pointsCounterTeamB}
        </NumberOfPointsContainer>
        <TitleContainer>Team B</TitleContainer>
      </HeaderList>
    </Container>
  )
}