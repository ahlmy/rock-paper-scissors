import styles from "./GameContent.module.css";
import { Step1, Step2 } from "./Steps";
import { Rock, Paper, Scissors, Spock, Lizard } from "./Tokens/Tokens";
import { useContext, useState, createContext } from "react";
import { GameContext } from "../../App";

export const ChosenComponent = createContext();

const GameContent = () => {
  const { step, setStep } = useContext(GameContext);
  const [chosenComponent, setChosenComponent] = useState();
  const getComponent = (name) => {
    switch (name) {
      case "rock":
        return <Rock name="rock" />;
      case "paper":
        return <Paper name="paper" />;
      case "scissors":
        return <Scissors name="scissors" />;
      case "spock":
        return <Spock name="spock" />;
      case "lizard":
        return <Lizard name="lizard" />;
      default: // TODO: Remove this on production
        return <Rock name="rock" />;
    }
  };
  const renderStep = (s) => {
    switch (s) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 Component={getComponent(chosenComponent)} />;
      default:
        return;
    }
  };
  return (
    <ChosenComponent.Provider value={{ chosenComponent, setChosenComponent }}>
      <div className={styles.container}>{renderStep(step)}</div>
    </ChosenComponent.Provider>
  );
};
export default GameContent;
