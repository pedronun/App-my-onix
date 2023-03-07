import styled from "styled-components/native";

export const Container = styled.View`
  width: 313px;
  height: 232px;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  margin-top: 24px;
  padding: 24px;
  justify-content: center;
  align-items: center;
`;

export const ErrorTextResult = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
