import { useState } from "react";
import { Keyboard } from "react-native";
import { useTheme } from "styled-components/native";
import { useCode } from "../../context/CodeProvider";
import {
  ButtonText,
  Container,
  Input,
  Line,
  SearchButton
} from "./Form.styles";

export function Form() {
  const { colors } = useTheme();
  const { handleCode } = useCode();

  const [code, setCode] = useState("");

  return (
    <Container>
      <Input
        placeholder="Código do erro"
        placeholderTextColor={colors.grayTextColor}
        keyboardType="numeric"
        onChangeText={(text) => setCode(text)}
        value={code}
        maxLength={3}
      />
      <SearchButton
        onPress={() => {
          Keyboard.dismiss();
          handleCode(code);
          setCode("");
        }}
        accessible={false}
        disabled={!code}
      >
        <ButtonText>Pesquisar</ButtonText>
      </SearchButton>
      <Line />
    </Container>
  );
}
