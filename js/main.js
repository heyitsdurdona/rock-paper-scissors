import { elHands, elRefreshGame } from "./html-elements.js";
import { refreshGame } from "./refresh-game.js";
import { uiChanger } from "./ui-changer.js";

elHands.forEach(el =>{
    el.addEventListener('click', function(evt){
        uiChanger(evt.target.alt)
    })
});

// refresh game
elRefreshGame.addEventListener('click', function(){
    refreshGame();
});