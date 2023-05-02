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
    content: `<h2>Precautions</h2>
          <p>
          1.The student/ subject has to sit 1 ft away from the screen.
          విద్యార్థి/ సబ్జెక్ట్ స్క్రీన్ నుండి 1-2 అడుగుల దూరంలో కూర్చోవాలి 
          </p>
          <p>2.The subject/ student has to sit in an isolated room so that he/she will not get distracted.

          సబ్జెక్ట్/విద్యార్థి వివిక్త గదిలో కూర్చోవాలి, తద్వారా అతను/ఆమె దృష్టి మరల్చకూడదు.
          </p>
          <p>3.If the subject is using phone/ tab then its mandatory to put the phone on DND mode.

          విద్యార్థి ఫోన్‌లు/ట్యాబ్‌లను ఉపయోగిస్తుంటే, ఫోన్‌ను DND మోడ్‌లో ఉంచడం తప్పనిసరి.
          </p>`,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
  },
  {
    stepIndex: 3,
    content: `<h2>Instructions</h2>
    <p>A set of words will be presented to you on the screen, one after the other. Each word will be 
    displayed for a brief period of time. Pay attention to them carefully as you will have to recall 
    them later.</p>
    <p>{Translate In telugu}</p>`,
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
    Please pay attention to them carefully as you will have to recall them later</p><p>Only colors no text</p>
    <p>{Translate In telugu}</p>
    <p> Click next below to move start the trial</p>`,
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
    <p>{Translate In telugu}</p`,
    buttonLabel2: "Next",
    voiceInstruction: sound1,
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
