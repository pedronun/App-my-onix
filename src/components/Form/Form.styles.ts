import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 54.71px;
  width: 313px;
  align-items: center;
`;

export const Input = styled.TextInput`
  margin-bottom: 16px;
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 16px 0 15px 15px;
`;

export const ButtonText = styled.Text`
  font-family: "Roboto_700Bold";
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.white};
`;

export const SearchButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.View`
  width: 275px;
  height: 1px;
  background: ${({ theme }) => theme.colors.darkGray};
  margin-top: 24px;
`;
