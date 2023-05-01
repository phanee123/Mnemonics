import { imageImports } from "../constants/general";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ResultsContext } from "../context/Results";

const ImageFlash = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { step, setStep } = useContext(ResultsContext);
  const navigate = useNavigate();

  useEffect(() => {
    for (let i = 0; i <= imageImports.length; i++) {
      setTimeout(() => {
        if (i === imageImports.length) {
          if (step !== 4) navigate("/");
          else navigate("/intervention");
        } else setCurrentImage(i);
      }, i * 1000);
    }
  }, []);

  return <img src={imageImports[currentImage].imageUrl} alt={imageImports[currentImage].name} />;
};

export default ImageFlash;
