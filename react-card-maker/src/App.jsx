import "./App.module.css";
import Footer from "./components/footer/footer";
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/header/header";
import Login from "./components/login/login";

function App() {
  return (
    <div>
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
