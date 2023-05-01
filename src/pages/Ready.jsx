import { useEffect, useContext } from "react";
import { ResultsContext } from "../context/Results";
import { useNavigate } from "react-router-dom";

const Ready = () => {
  const navigate = useNavigate();
  const { step, setStep } = useContext(ResultsContext);
  // const audio = new Audio();

  useEffect(() => {
    setTimeout(() => {
      navigate("/image-flash");
      setStep(step + 1);
    }, 2500);
  }, []);
  return <h1>Ready</h1>;
};

export default Ready;
