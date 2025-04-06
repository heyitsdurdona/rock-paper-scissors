export function findWinner(user, robot) {
  if (user === robot) {
    return "tied";
  } else if (
    (user === "rock" && (robot === "scissors" || robot === "lizard")) ||
    (user === "paper" && (robot === "rock" || robot === "puppy")) ||
    (user == "scissors" && (robot === "paper" || robot === "lizard"))||
    (user === "puppy" && (robot === "rock" || robot === "scissors")) ||
    (user === 'lizard' && (robot === 'puppy' || robot === 'paper'))
  ) {
    return "user";
  } else {
    return "robot";
  }
}
