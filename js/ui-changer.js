import { findWinner } from "./find-winner.js";
import { elRobot, elScore, elStatus, elUser } from "./html-elements.js";
import { robotChooser } from "./robot-chooser.js";
import { sectionSwapper } from "./section-swapper.js";

let userScore = Number(elScore.innerText);
export function uiChanger(variant){
    elUser.src = `./images/${variant}.svg`;
    sectionSwapper(true);

    setTimeout(() => {
        const robot = robotChooser();
        elRobot.src = `./images/${robot}.svg`;
        const winner = findWinner(variant, robot);
        if (winner === 'tied'){
            elStatus.innerText = "TIED"
        } else if (winner === 'user'){
            elStatus.innerText = "YOU WON";
            userScore++
        }      
        else {
            elStatus.innerText = "YOU LOOSE";
            userScore = Math.max(0, userScore-1);
        }
        elScore.innerText = userScore;
    }, 1000);
}