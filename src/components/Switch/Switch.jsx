import styles from "./Switch.module.css";
import { useRef, useState, useContext } from "react";
import { GameContext } from "../../App";

const Switch = () => {
  const { mode, setMode, setStep } = useContext(GameContext);
  const switchRef = useRef();
  const [canSwitch, setCanSwitch] = useState(true);
  const rotateSwitch = () => {
    if (!canSwitch) return;
    setCanSwitch(false);
    switchRef.current.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      switchRef.current.style.transform = null;
      const newMode = mode === "original" ? "bonus" : "original";
      setMode(newMode);
      localStorage.setItem("mode", newMode);
      setStep(1);
    }, 400);
    setTimeout(() => {
      setCanSwitch(true);
    }, 800);
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.switchContainer}
        onClick={rotateSwitch}
        ref={switchRef}
      >
        <div className={styles.text}>Switch Mode</div>
      </div>
    </div>
  );
};
export default Switch;
