import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import { Header, Footer } from "./components/index";
import { HomePage, ProductPage } from "./pages/";

axios.defaults.baseURL = "http://127.0.0.1:8000";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={ProductPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
