import { Header } from "./components/Header";
import { Router } from "./routes";
import { Wrapper } from "./style";

function App() {
  return (
    <Wrapper>
      <Header />
      <Router />
    </Wrapper>
  );
}

export default App;
