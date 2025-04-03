export function robotChooser(){
    const hands =  ['paper', 'scissors', 'rock'];
    let randomIndex = Math.trunc(Math.random()* hands.length);
    return hands[randomIndex];
}