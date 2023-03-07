import styled from "styled-components/native";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.primary};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogoTitle = styled.Text`
  font-family: "SecularOne_400Regular";
  font-size: 23.3095px;
  line-height: 34px;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 17.29px;
`;
