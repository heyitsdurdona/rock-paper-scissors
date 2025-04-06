import { findWinner } from "./find-winner.js";
import { elRobot, elScore, elStatus, elUser, elGameZoneMode} from "./html-elements.js";
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
            if (elGameZoneMode.dataset.mode === 'simple'){
                userScore++
            } else {    
                userScore += 2;
            }
        }      
        else {
            elStatus.innerText = "YOU LOOSE";
            if (elGameZoneMode.dataset.mode === 'simple'){
                userScore = Math.max(0, userScore-1);
            } else {
                userScore = Math.max(0, userScore-2);
            }
        }
        elScore.innerText = userScore;
    }, 1000);
}