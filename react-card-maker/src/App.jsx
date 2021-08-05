import "./App.module.css";
import Login from "./components/login/login";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Maker from "./components/maker/maker";

function App({ authService }) {
  return (
    <Router>
      <Route exact path="/">
        <section className={styles.app}>
          <Login authService={authService} />
        </section>
      </Route>
      <Route path="/maker">
        <Maker authService={authService} />
      </Route>
    </Router>
  );
}

export default App;
