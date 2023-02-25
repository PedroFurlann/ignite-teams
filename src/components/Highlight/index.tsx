import { Container, SubtitleContainer, TitleContainer } from "./styles";

interface HighlightProps {
  title: string;
  subtitle: string;
}

export function Highlight({ title, subtitle }: HighlightProps) {
  return (
    <Container>
      <TitleContainer>
        {title}
      </TitleContainer>

      <SubtitleContainer>
        {subtitle}
      </SubtitleContainer>
    </Container>
  )
}