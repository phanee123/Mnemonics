import { createContext, useEffect, useState } from "react";
import { imageImports } from "../constants/general";

export const ResultsContext = createContext({
  step: 1,
  setStep: () => {},
  userInput: [],
  setUserInput: () => {},
});

export const ResultsProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [userInput, setUserInput] = useState([]);
  const [systemInput, setSystemInput] = useState(
    imageImports.map((imageData) => ({ type: imageData.type, name: imageData.name }))
  );

  const value = { step, setStep, userInput, setUserInput, systemInput, setSystemInput };
  return <ResultsContext.Provider value={value}>{children}</ResultsContext.Provider>;
};
