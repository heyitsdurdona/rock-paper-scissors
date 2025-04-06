import { elGameZoneMode } from "./html-elements.js";

export function robotChooser(){
    let hands = elGameZoneMode.dataset.mode === 'simple'? ['paper', 'scissors', 'rock'] : ['paper', 'scissors', 'rock', 'lizard', 'puppy'];
    let randomIndex = Math.trunc(Math.random()* hands.length);
    return hands[randomIndex];
}