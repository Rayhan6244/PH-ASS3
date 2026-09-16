function isElevatorSafe(weights) {
  if (!Array.isArray(weights)) 
    return "Invalid";
  let sum = 0;
  for (let w of weights) 
    sum += w;
  return sum <= 400;
}

let elivator = isElevatorSafe([60, 75, 50]);
console.log(elivator);
