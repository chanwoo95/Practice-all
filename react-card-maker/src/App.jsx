import "./App.module.css";
import Login from "./components/login/login";
import styles from "./App.module.css";

function App({ authService }) {
  return (
    <section className={styles.app}>
      <Login authService={authService} />
    </section>
  );
}

export default App;
