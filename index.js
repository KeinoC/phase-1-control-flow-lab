function scuberGreetingForFeet(dist) {
  let result = 0;
  if (dist <= 400) {
    return `This one is on me!`;
  } else if (dist > 400 && dist <= 2000) {
    return `That will be twenty bucks.`
  } else if (dist > 2000 && dist <= 2500) {
  return `I will gladly take your thirty bucks.`
}
return `No can do.`;
}
console.log(scuberGreetingForFeet(500))
function ternaryCheckCity(city){
  if (city === "NYC") {
    return "Ok, sounds good.";
    } else if (city !== "NYC") {
      return "No go."
    }
  }

function switchOnCharmFromTip(tip){
  if (tip === "generous") {
    return `Thank you so much.`
    } else if (tip === "not as generous") {
      return `Thank you.`
  } else 
    return `Bye.` // Write your code here!
}


console.log(scuberGreetingForFeet())
console.log(ternaryCheckCity())
console.log(switchOnCharmFromTip())