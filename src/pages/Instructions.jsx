import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  INSTRUCTION_STEPS_TEST1,
  INSTRUCTION_STEPS_TEST2,
  INSTRUCTION_STEPS_TEST3,
} from "../constants/InstructionSteps";
import Instruction from "../components/new-instruction";
import { ResultsContext } from "../context/Results";

const Instructions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const { step } = useContext(ResultsContext);

  const CURRENT_INSTRUCTIONS = [
    "",
    INSTRUCTION_STEPS_TEST1,
    INSTRUCTION_STEPS_TEST2,
    INSTRUCTION_STEPS_TEST3,
  ][step];
  const {
    stepIndex,
    buttonLabel1 = "",
    content,
    buttonLabel2 = "",
    voiceInstruction = "",
  } = CURRENT_INSTRUCTIONS[currentStep];

  const audio = new Audio(voiceInstruction);
  const handleNextClick =
    stepIndex === CURRENT_INSTRUCTIONS.length
      ? () => navigate(`/ready`)
      : () => setCurrentStep((prev) => prev + 1);
  const handleBackClick = () => setCurrentStep((prev) => prev - 1);

  const audioPlayPause = () => {
    if (voiceInstruction) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  };

  return (
    <Instruction
      handleNextClick={() => {
        handleNextClick();
        audio.pause();
      }}
      label1={buttonLabel1}
      label2={buttonLabel2}
      handleBackClick={() => {
        handleBackClick();
        audio.pause();
      }}
      voiceInstruction={voiceInstruction}
      handleAudio={audioPlayPause}
    >
      {content}
    </Instruction>
  );
};

//below are the lines before adding voice instructions audio handling function to this .
// return (
//   <Instruction
//     handleNextClick={handleNextClick}
//     label1={buttonLabel1}
//     label2={buttonLabel2}
//     handleBackClick={handleBackClick}
//   >
//     {content}
//   </Instruction>
// );

export default Instructions;
