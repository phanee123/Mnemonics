import { imageImports } from "../constants/general";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ResultsContext } from "../context/Results";
import styles from "./style.module.css";

const ImageFlash = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { step, setStep } = useContext(ResultsContext);
  const navigate = useNavigate();

  useEffect(() => {
    for (let i = 0; i <= imageImports.length; i++) {
      setTimeout(() => {
        if (i === imageImports.length) {
          if (step !== 4) navigate("/");
          else {
            navigate("/intervention");
            //setTimeout(() => navigate("/intervention"), 1000);
          }
        } else setCurrentImage(i);
      }, i * 1000);
    }
  }, []);

  return (
    <img
      className={styles.container}
      src={imageImports[currentImage].imageUrl}
      alt={imageImports[currentImage].name}
    />
  );
};

export default ImageFlash;
