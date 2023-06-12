import styles from "./Game.module.css";
import { GameContent, Scoreboard } from "../";
import { useState, createContext } from "react";

export const ScoreContext = createContext();
const loadedOriginalScore = +localStorage.getItem("originalScore") ?? 0;
const loadedBonusScore = +localStorage.getItem("bonusScore") ?? 0;

const Game = () => {
  const [originalScore, setOriginalScore] = useState(loadedOriginalScore);
  const [bonusScore, setBonusScore] = useState(loadedBonusScore);
  const setScore = (mode) => {
    if (mode === "original") {
      localStorage.setItem("originalScore", originalScore + 1);
      setOriginalScore((cur) => cur + 1);
    } else if (mode === "bonus") {
      localStorage.setItem("bonusScore", bonusScore + 1);
      setBonusScore((cur) => cur + 1);
    }
  };
  return (
    <div className={styles.container}>
      <ScoreContext.Provider value={{ originalScore, bonusScore, setScore }}>
        <Scoreboard />
        <GameContent />
      </ScoreContext.Provider>
    </div>
  );
};
export default Game;
