import styles from "./Scoreboard.module.css";
import { logo_original, logo_bonus } from "../../assets";
import { useContext } from "react";
import { GameContext } from "../../App";
import { ScoreContext } from "../Game/Game";

const Scoreboard = ({ org_score, bonus_score }) => {
  const { mode } = useContext(GameContext);
  const { originalScore, bonusScore } = useContext(ScoreContext);
  return (
    <div className={styles.content}>
      <img
        src={mode === "original" ? logo_original : logo_bonus}
        alt="logo"
        className={styles.img}
      />
      <div className={styles.scoreContainer}>
        <div className={styles.title}>SCORE</div>
        <h1 className={styles.score}>
          {mode === "original" ? originalScore : bonusScore}
        </h1>
      </div>
    </div>
  );
};
export default Scoreboard;
