import { useEffect, useContext } from "react";
import { ResultsContext } from "../context/Results";
import { useNavigate } from "react-router-dom";
import readyAudio from "../assets/Ready.mp3";

const Ready = () => {
  const navigate = useNavigate();
  const { step, setStep } = useContext(ResultsContext);
  const audio = new Audio(readyAudio);

  useEffect(() => {
    audio.play();
    setTimeout(() => {
      navigate("/image-flash");
      setStep(step + 1);
    }, 2500);
  }, []);
  return <h1>Ready</h1>;
};

export default Ready;
