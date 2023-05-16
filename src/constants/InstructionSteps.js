import sound1 from "../assets/instructionaudio1.mp3";
import sound2 from "../assets/instructionaudio2.mp3";

const INSTRUCTION_STEPS_TEST1 = [
  {
    stepIndex: 1,
    content: `<h2>Welcome to the experiment!</h2>
          <p>
          Welcome to the experiment!
          {write some basic intro for page 1 on mnemonics same will be translated and written in telugu}
          </p>`,
    buttonLabel2: "Next",
  },
  {
    stepIndex: 2,
    content: `<h2>Conditions to be followed while conducting the experiment / Precautions!</h2>
          <p>
          The student or the subject will have to sit 1 ft away from the screen. 
          </p>
          <p>The subject will have to sit comfortably in a quiet and well-ventilated room.
          </p>
          <p>If the subject is using phone/ tab to conduct the experiment then it is mandatory for him/her 
              to put the phone on Do Not Disturb (DND) mode in order to avoid any disruptions.
          </p>
          <p>Please keep a notebook and a pen while you are conducting the experiment because you may have to note down some information.</p>
          `,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
  },
  {
    stepIndex: 3,
    content: `<h2>Instructions</h2>
    <p>A set of words will be presented to you on the screen, one after the other. Each word will be 
    displayed for a brief period of time. Pay attention to them carefully as you will have to recall 
    them later.</p>
    `,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
    voiceInstruction: sound1,
  },
];

//second set of instructions which will be displayed before the second trail

const INSTRUCTION_STEPS_TEST2 = [
  {
    stepIndex: 1,
    content: `<h2>Instructions</h2>
    <p>Same set of words will be presented on the screen. 
    Please pay attention to them carefully as you will have to recall them later</p>
    
    `,
    voiceInstruction: sound2,
    buttonLabel2: "Next",
  },
];

const INSTRUCTION_STEPS_TEST3 = [
  {
    stepIndex: 1,
    content: `
    <h2>Instructions</h2>
    <p>Same set of words will be presented on the screen. Please pay attention to them carefully 
    as you will have to recall them later. </p>
    `,
    buttonLabel2: "Next",
    voiceInstruction: sound2,
  },
  // {
  //   stepIndex: 2,
  //   content: `<p>Experiment will start after you end instructions.</p>`,
  //   buttonLabel1: "Previous",
  //   buttonLabel2: "End Instructions",
  // },
];

export {
  INSTRUCTION_STEPS_TEST1,
  INSTRUCTION_STEPS_TEST2,
  INSTRUCTION_STEPS_TEST3,
};
