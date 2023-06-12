import styles from "./Step1.module.css";
import { bg_triangle, bg_pentagon } from "../../../../assets";
import { Rock, Paper, Scissors, Spock, Lizard } from "../../Tokens/Tokens";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../../../App";

const med = window.matchMedia("(max-width: 400px)");

const Step1 = () => {
  const [match, setMatch] = useState();
  const handleMatch = (e) => {
    setMatch(e.matches);
  };
  useEffect(() => {
    med.addEventListener("change", handleMatch);
    med.matches ? setMatch(true) : setMatch(false);
    return () => med.removeEventListener("change", handleMatch);
  }, []);
  const { mode } = useContext(GameContext);
  return (
    <div className={styles.container}>
      <img
        src={mode === "original" ? bg_triangle : bg_pentagon}
        alt="tri"
        className={styles.img}
      />
      <div
        className={styles.token}
        style={
          mode === "original"
            ? { top: -70, left: -70 }
            : { top: -70, scale: match ? "0.7" : "0.9" }
        }
      >
        <Rock />
      </div>
      <div
        className={styles.token}
        style={
          mode === "original"
            ? { top: -70, right: -70 }
            : {
                left: -70,
                transform: "translateY(-20px)",
                scale: match ? "0.7" : "0.9",
              }
        }
      >
        <Paper />
      </div>
      <div
        className={styles.token}
        style={
          mode === "original"
            ? { bottom: -70 }
            : { bottom: -70, left: -25, scale: match ? "0.7" : "0.9" }
        }
      >
        <Scissors />
      </div>
      {mode === "bonus" ? (
        <>
          <div
            className={styles.token}
            style={{
              right: -70,
              transform: "translateY(-20px)",
              scale: match ? "0.7" : "0.9",
            }}
          >
            <Spock />
          </div>
          <div
            className={styles.token}
            style={{ bottom: -70, right: -25, scale: match ? "0.7" : "0.9" }}
          >
            <Lizard />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
export default Step1;
