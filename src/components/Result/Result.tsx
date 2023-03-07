import { Text } from "react-native";
import { useCode } from "../../context/CodeProvider";
import { Container, ErrorTextResult } from "./Result.styles";

export function Result() {
  const { code } = useCode();

  return (
    <Container>
      {Object.keys(code).length ? (
        <ErrorTextResult>{code.error.message}</ErrorTextResult>
      ) : (
        <ErrorTextResult>Informe o código do erro no campo acima.</ErrorTextResult>
      )}
    </Container>
  )
}