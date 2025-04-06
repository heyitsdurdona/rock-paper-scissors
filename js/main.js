import { elGameZoneMode, elHands, elModeChanger, elRefreshGame, elRules, elRuleImg} from "./html-elements.js";
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

elModeChanger.addEventListener('click', function(evt){
    if (elGameZoneMode.dataset.mode === 'simple'){
        elGameZoneMode.dataset.mode = 'advanced';
        evt.target.innerText = 'Simple';
        console.log(elRules);       
        
    } else {
        elGameZoneMode.dataset.mode = 'simple';
        evt.target.innerText = 'Advanced';
        
    }
})

elRules.addEventListener('click', function(evt){
    let mode = elGameZoneMode.dataset.mode;
    if (mode === 'simple'){
        elRuleImg.src = './images/rule-basic.svg';
    } else {
        elRuleImg.src = './images/rule-advanced.svg';
    }
})
