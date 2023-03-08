import { MaterialIcons } from '@expo/vector-icons'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 80%;
  height: 50px;
  background-color: ${(props) => props.theme.COLORS.GRAY_500};
  margin-bottom: 12px;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between
`;

export const NameContainer = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  flex: 1;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 16,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 12px;
  margin-right: 4px;
`;