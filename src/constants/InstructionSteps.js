import sound1 from "../assets/instructionaudio1.mp3";
import sound2 from "../assets/instructionaudio2.mp3";

const INSTRUCTION_STEPS_TEST1 = [
  {
    stepIndex: 1,
    content: `<h2>Welcome to the experiment!</h2>
          <p>There are several strategies to the process of remembering. Psychologist are of the view that person’s ability to Remember and perform memory related task, can be improved by knowledge or the information and training which an individual has about the nature of memory and how it works. Knowledge relates to an awareness of the methods and strategies that can be adopted for effectively remembering newly received information.</p>
          <p>Mnemonics are methods of organizing material in a way that help us to remember quickly and easily.</p>
          <p>Mnemonic devices range from tying a knot to handkerchief, to rhymes, tunes, cueing, categorizing, reducing, elaborating, etc. </p>
          <p>One method that is often employed is where visual imagery is used. The visual imagery mnemonic system, reported to have been used extensively in ancient times by orators who wished to memorize a lengthy speech, which is known as the method of loci.</p>          
          `,
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
    content: `<h2>General Instructions</h2>
    <h4>Note:This experiment has to be written in your record book. Please adhere to the below format.</h4>
          <p>1.Introduction</p>
          <p>2.Materials required</p>
          <p>3.Purpose</p>
          <p>4.Particulars of the subject/student [Name,Enrollment No,Age,Date]</p>
          <p>5.Procedure for conduction</p>
          <p>6.Results</p>
          <p>7.Discussions</p>
          <p>8.Conclusion</p>
          <p>9.Practical application</p>
    `,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
  },

  {
    stepIndex: 4,
    content: `<h3>Now we will begin the experiment!</h3>
    <h4>(ఇప్పుడు ప్రయోగం ప్రారంభమవుతుంది)</h4>
    
    <h2><h2>
    <h2>Instructions</h2>
    <p>A set of words will be presented to you on the screen, one after the other. 
      Each word will be displayed for a brief period of time. Please pay attention to them carefully as you will have to recall them later.</p>
    <p>మీకు స్క్రీన్ పైన కొన్ని పదాలు  ఒకదాని తర్వాత ఒకటి ప్రదర్శించబడతాయి. ప్రతి పదం కొంత సమయం వరకు ప్రదర్శించబడుతుంది. దయచేసి వాటిని జాగ్రత్తగా 
    గమనించండి ఎందుకంటే మీరు వాటిని తర్వాత గుర్తు తెచ్చుకోవాల్సి ఉంటుంది.</p>
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
    <p>Same set of words will be presented on the screen again. 
    Please pay attention to them carefully as you will have to recall them later</p>
    <p>అవే పదాల సెట్ మళ్లీ తెరపై ప్రదర్శించబడుతుంది. దయచేసి వాటిని జాగ్రత్తగా గమనించండి ఎందుకంటే,తర్వాత గుర్తు తెచ్చుకోవాల్సి ఉంటుంది</p>
    
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
    <p>Same set of words will be presented on the screen screen.Please pay attention to them carefully 
    as you will have to recall them later. </p>
    <p>అవే పదాల సెట్ మళ్లీ తెరపై ప్రదర్శించబడుతుంది. దయచేసి వాటిని జాగ్రత్తగా గమనించండి ఎందుకంటే,తర్వాత గుర్తు తెచ్చుకోవాల్సి ఉంటుంది</p>
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
