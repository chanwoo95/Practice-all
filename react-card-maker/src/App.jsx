import "./App.module.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
}

export default App;
