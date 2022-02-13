import { Container } from "react-bootstrap";
import { Header, Footer } from "./components/index";
import { Home } from "./pages/";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
