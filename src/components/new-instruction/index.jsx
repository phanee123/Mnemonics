import { useEffect } from "react";
import styles from "./styles.module.css";
import Parser from "html-react-parser";

const Instruction = (props) => {
  const { children, label1, label2, voiceInstruction, handleBackClick, handleNextClick, handleAudio } = props;

  return (
    <div className={styles.card}>
      {Parser(children)}
      <div className={styles.buttonContainer}>
        {voiceInstruction && (
          <button onClick={handleAudio} className={styles.buttonBack}>
            PLAY
          </button>
        )}
        {label1 && (
          <button onClick={handleBackClick} className={styles.buttonBack}>
            {label1}
          </button>
        )}
        {label2 && (
          <button onClick={handleNextClick} className={styles.button}>
            {label2}
          </button>
        )}
      </div>
    </div>
  );
};

export default Instruction;
