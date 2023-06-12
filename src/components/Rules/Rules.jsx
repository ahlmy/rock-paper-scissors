import styles from "./Rules.module.css";
import { useState, useRef, useContext } from "react";
import { icon_close } from "../../assets";
import { GameContext } from "../../App";
import { rules_original, rules_bonus } from "../../assets";

const Rules = () => {
  const { mode } = useContext(GameContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();
  const openModal = () => {
    Object.assign(modalRef.current.style, {
      opacity: 1,
      scale: 1,
      transform: "translate(50%, 50%)",
      right: "50%",
      bottom: "50%",
    });
    setIsModalOpen(true);
  };
  const closeModal = () => {
    modalRef.current.removeAttribute("style");
    setIsModalOpen(false);
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.btn}
        onClick={() => (isModalOpen ? closeModal() : openModal())}
      >
        Rules
      </div>
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>RULES</h1>
          <img
            src={icon_close}
            alt="close"
            className={styles.close}
            onClick={closeModal}
          />
        </div>
        <img
          src={mode === "original" ? rules_original : rules_bonus}
          alt="modal"
          className={styles.img}
        />
        <img
          src={icon_close}
          alt="close"
          className={styles.closeMobile}
          onClick={closeModal}
        />
      </div>
    </div>
  );
};
export default Rules;
