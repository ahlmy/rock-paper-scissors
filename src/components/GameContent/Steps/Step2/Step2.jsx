import styles from "./Step2.module.css";
import { Rock, Paper, Scissors, Spock, Lizard } from "../../Tokens/Tokens";
import { GameContext } from "../../../../App";
import { useContext, useState, useEffect, useRef } from "react";
import { ScoreContext } from "../../../Game/Game";

const Step2 = ({ Component }) => {
  const userPickRef = useRef();
  const housePickRef = useRef();
  const { mode, setStep } = useContext(GameContext);
  const { setScore } = useContext(ScoreContext);
  const [housePick, setHousePick] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [tie, setTie] = useState(false);
  const [didWin, setDidWin] = useState(false);
  const handleResult = (bool) => {
    if (bool) {
      setScore(mode);
      setDidWin(true);
    } else if (!bool) {
      setDidWin(false);
    }
    setShowResult(true);
  };
  const getResult = (pick) => {
    const up = Component.props.name;
    const hp = pick.props.name;
    if (up == hp) {
      setTie(true);
      return handleResult(false);
    }
    if (up === "rock") {
      if (hp === "scissors" || hp === "lizard") return handleResult(true);
      else return handleResult(false);
    } else if (up === "scissors") {
      if (hp === "paper" || hp === "lizard") return handleResult(true);
      else return handleResult(false);
    } else if (up === "paper") {
      if (hp === "rock" || hp === "spock") return handleResult(true);
      else return handleResult(false);
    } else if (up === "lizard") {
      if (hp === "paper" || hp === "spock") return handleResult(true);
      else return handleResult(false);
    } else if (up === "spock") {
      if (hp === "rock" || hp === "scissors") return handleResult(true);
      else return handleResult(false);
    }
  };
  useEffect(() => {
    const comps =
      mode === "bonus"
        ? [
            <Rock name="rock" />,
            <Paper name="paper" />,
            <Scissors name="scissors" />,
            <Spock name="spock" />,
            <Lizard name="lizard" />,
          ]
        : [
            <Rock name="rock" />,
            <Paper name="paper" />,
            <Scissors name="scissors" />,
          ];
    let to;
    const startShuffle = setTimeout(() => {
      shuffle(50);
    }, 300);
    const shuffle = (time, index = 0) => {
      if (index >= comps.length - 1) index = 0;
      if (time >= 500) {
        const rnd = Math.floor(Math.random() * comps.length);
        setHousePick(comps[rnd]);
        return getResult(comps[rnd]);
      }
      to = setTimeout(() => {
        setHousePick(comps[index]);
        shuffle(time + 50, index + 1);
      }, time);
    };
    startShuffle;
    return () => {
      clearTimeout(to);
      clearTimeout(startShuffle);
    };
  }, []);
  useEffect(() => {
    if (!showResult) return;
    if (didWin) {
      const elem = userPickRef.current.querySelector("div");
      elem.insertAdjacentHTML("afterbegin", `<div class="bg-effect"></div>`);
    } else if (!didWin) {
      const elem = housePickRef.current.querySelector("div");
      elem.insertAdjacentHTML("afterbegin", `<div class="bg-effect"></div>`);
    }
  }, [showResult]);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>YOU PICKED</div>
        <div className={styles.area} ref={userPickRef}>
          {Component}
        </div>
      </div>
      {showResult ? (
        <div className={styles.result}>
          <h1 className={styles.win}>
            {tie ? "TIE" : didWin ? "YOU WIN" : "YOU LOSE"}
          </h1>
          <button className={styles.btn} onClick={() => setStep(1)}>
            PLAY AGAIN
          </button>
        </div>
      ) : (
        ""
      )}
      <div className={styles.content}>
        <div className={styles.title}>THE HOUSE PICKED</div>
        <div className={styles.area} ref={housePickRef}>
          {housePick}
        </div>
      </div>
    </div>
  );
};
export default Step2;
