import ball from "./../assets/fonts/BALL.jpg";
import basket from "./../assets/fonts/BASKET.jpg";
import book from "./../assets/fonts/BOOK.jpg";
import coffee from "./../assets/fonts/COFFEE.jpg";
import college from "./../assets/fonts/COLLEGE.jpg";
import comb from "./../assets/fonts/COMB.jpg";
import confused from "./../assets/fonts/CONFUSED.jpg";
import double from "./../assets/fonts/DOUBLE.jpg";
import eyes from "./../assets/fonts/EYES.jpg";
import farm from "./../assets/fonts/FARM.jpg";
import fire from "./../assets/fonts/FIRE.jpg";
import fishy from "./../assets/fonts/FISHY.jpg";
import game from "./../assets/fonts/GAME.jpg";
import light from "./../assets/fonts/LIGHT.jpg";
import scatter from "./../assets/fonts/SCATTER.jpg";
import scribble from "./../assets/fonts/SCRIBBLE.jpg";
import stammer from "./../assets/fonts/STAMMER.jpg";
import tall from "./../assets/fonts/TALL.jpg";
import umbrella from "./../assets/fonts/UMBRELLA.jpg";
import zigzag from "./../assets/fonts/ZIGZAG.jpg";

const imageImports = [
  {
    id: 1,
    name: "BALL",
    imageUrl: ball,
    type: "Non-mnemonic",
  },
  {
    id: 2,
    name: "BASKET",
    imageUrl: basket,
    type: "Non-mnemonic",
  },
  {
    id: 3,
    name: "BOOK",
    imageUrl: book,
    type: "Non-mnemonic",
  },
  {
    id: 4,
    name: "COFFEE",
    imageUrl: coffee,
    type: "Non-mnemonic",
  },
  {
    id: 5,
    name: "COLLEGE",
    imageUrl: college,
    type: "Non-mnemonic",
  },
  {
    id: 6,
    name: "COMB",
    imageUrl: comb,
    type: "Non-mnemonic",
  },
  // {
  //   id: 7,
  //   name: "CONFUSED",
  //   imageUrl: confused,
  //   type:'mnemonic',
  // },
  // {
  //   id: 8,
  //   name: "DOUBLE",
  //   imageUrl: double,
  //   type:'mnemonic',
  // },
  // {
  //   id: 9,
  //   name: "EYES",
  //   imageUrl: eyes,
  //   type:'mnemonic',
  // },
  // {
  //   id: 10,
  //   name: "FARM",
  //   imageUrl: farm,
  //   type:"Non-mnemonic",
  // },
  // {
  //   id: 11,
  //   name: "FIRE",
  //   imageUrl: fire,
  //   type:'mnemonic',
  // },
  // {
  //   id: 12,
  //   name: "FISHY",
  //   imageUrl: fishy,
  //   type:'mnemonic',
  // },
  // {
  //   id: 13,
  //   name: "GAME",
  //   imageUrl: game,
  //   type:"Non-mnemonic",
  // },
  // {
  //   id: 14,
  //   name: "LIGHT",
  //   imageUrl: light,
  //   type:"Non-mnemonic",
  // },
  // {
  //   id: 15,
  //   name: "SCATTER",
  //   imageUrl: scatter,
  //   type:'mnemonic',
  // },
  // {
  //   id: 16,
  //   name: "SCRIBBLE",
  //   imageUrl: scribble,
  //   type:'mnemonic',
  // },
  // {
  //   id: 17,
  //   name: "STAMMER",
  //   imageUrl: stammer,
  //   type:'mnemonic',
  // },
  // {
  //   id: 18,
  //   name: "TALL",
  //   imageUrl: tall,
  //   type:'mnemonic',
  // },
  // {
  //   id: 19,
  //   name: "UMBRELLA",
  //   imageUrl: umbrella,
  //   type: "Non-mnemonic",
  // },
  // {
  //   id: 20,
  //   name: "ZIGZAG",
  //   imageUrl: zigzag,
  //   type: mnemonic,
  // },
];

const NUMBER_OF_SECONDS = 10;
const NUM_QUESTIONS_INTERVENTION = 12;
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
export { imageImports, getRandomInt, NUMBER_OF_SECONDS, NUM_QUESTIONS_INTERVENTION };
