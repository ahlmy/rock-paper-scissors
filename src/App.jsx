import { useState, createContext } from "react";
import styles from "./App.module.css";
import { Game, Rules, Switch } from "./components";
import { Helmet } from "react-helmet";

export const GameContext = createContext();

const initialMode = localStorage.getItem("mode") ?? "original";

function App() {
  const [mode, setMode] = useState(initialMode);
  const [step, setStep] = useState(1);
  return (
    <GameContext.Provider
      value={{
        mode,
        setMode,
        step,
        setStep,
      }}
    >
      <Helmet>
        <title>
          {mode === "original"
            ? "ROCK PAPER SCISSORS"
            : "ROCK PAPER SCISSORS SPOCK LIZARD"}
        </title>
      </Helmet>
      <div className={styles.container}>
        <div className={styles.switch}>
          <Switch />
        </div>
        <div className={styles.content}>
          <Game />
        </div>
        <div className={styles.rules}>
          <Rules />
        </div>
      </div>
    </GameContext.Provider>
  );
}

export default App;
