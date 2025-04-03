import { elGameZone, elSecondGameZone } from "./html-elements.js";

export function sectionSwapper(boolean){
   if (boolean){
    elGameZone.classList.add("hidden");
    elSecondGameZone.classList.remove('hidden');
} else{
       elGameZone.classList.remove("hidden");
       elSecondGameZone.classList.add('hidden');
   }
}