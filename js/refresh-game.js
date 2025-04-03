import { elRobot, elStatus } from "./html-elements.js";
import { sectionSwapper } from "./section-swapper.js";

export function refreshGame(){
    elRobot.src = `./images/hand-load.svg`;
    elStatus.innerText = '';
    sectionSwapper(false);
}