import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { Main } from "@/components/Main";

const App = (props) => {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <Main></Main>
    </Container>
  );
};

export default App;
