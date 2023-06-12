import styles from "./Tokens.module.css";
import {
  icon_rock,
  icon_paper,
  icon_scissors,
  icon_lizard,
  icon_spock,
} from "../../../assets";
import { useContext } from "react";
import { ChosenComponent } from "../GameContent";
import { GameContext } from "../../../App";

const Rock = () => {
  const { step, setStep } = useContext(GameContext);
  const { setChosenComponent } = useContext(ChosenComponent);
  return (
    <div
      className={styles.container}
      style={{ background: "var(--rock-gradient)" }}
      onClick={
        step === 1
          ? () => {
              setChosenComponent("rock");
              setStep(2);
            }
          : null
      }
    >
      <img src={icon_rock} alt="rock" className={styles.img} />
    </div>
  );
};

const Paper = () => {
  const { step, setStep } = useContext(GameContext);
  const { setChosenComponent } = useContext(ChosenComponent);
  return (
    <div
      className={styles.container}
      style={{ background: "var(--paper-gradient)" }}
      onClick={
        step === 1
          ? () => {
              setChosenComponent("paper");
              setStep(2);
            }
          : null
      }
    >
      <img src={icon_paper} alt="paper" className={styles.img} />
    </div>
  );
};
const Scissors = () => {
  const { step, setStep } = useContext(GameContext);
  const { setChosenComponent } = useContext(ChosenComponent);
  return (
    <div
      className={styles.container}
      style={{ background: "var(--scissors-gradient)" }}
      onClick={
        step === 1
          ? () => {
              setChosenComponent("scissors");
              setStep(2);
            }
          : null
      }
    >
      <img src={icon_scissors} alt="scissors" className={styles.img} />
    </div>
  );
};
const Spock = () => {
  const { step, setStep } = useContext(GameContext);
  const { setChosenComponent } = useContext(ChosenComponent);
  return (
    <div
      className={styles.container}
      style={{ background: "var(--cyan-gradient)" }}
      onClick={
        step === 1
          ? () => {
              setChosenComponent("spock");
              setStep(2);
            }
          : null
      }
    >
      <img src={icon_spock} alt="spock" className={styles.img} />
    </div>
  );
};
const Lizard = () => {
  const { step, setStep } = useContext(GameContext);
  const { setChosenComponent } = useContext(ChosenComponent);
  return (
    <div
      className={styles.container}
      style={{ background: "var(--lizard-gradient)" }}
      onClick={
        step === 1
          ? () => {
              setChosenComponent("lizard");
              setStep(2);
            }
          : null
      }
    >
      <img src={icon_lizard} alt="lizard" className={styles.img} />
    </div>
  );
};

export { Rock, Paper, Scissors, Spock, Lizard };
