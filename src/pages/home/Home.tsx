import { Image } from "react-native";
import { Form } from "../../components/Form/Form";
import { Result } from "../../components/Result/Result";
import { Container, Logo, LogoTitle } from "./Home.styles";

export function Home() {
  return (
    <Container>
      <Logo>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 102.59, height: 37.29 }}
        />
        <LogoTitle>MY ONIX</LogoTitle>
      </Logo>
      <Form />
      <Result />
    </Container>
  );
}
