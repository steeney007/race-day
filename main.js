let raceNumber = Math.floor (Math.random () * 2000);
//console.log (raceNumber);
let earlyAdult = raceNumber >= 1000;
let lateAdultAndYouth = raceNumber < 1000;
console.log (earlyAdult);
console.log (lateAdultAndYouth);
let runnerAge = 20;
if (runnerAge >= 18 && raceNumber >= 1000) {
    console.log (`This adult is an early registrant assigned number ${raceNumber += 1000}`)
}
if (runnerAge >= 18 && raceNumber >= 1000) {
    console.log (`You will run with the early adults at 9:30am, your race number is ${raceNumber}.`);
}
else if (runnerAge >= 18 && raceNumber < 1000) {
    console.log (`You will run with the late adults at 11:00am, your race number is ${raceNumber}.`)
}
else if (runnerAge < 18 && raceNumber < 1000) {
    console.log (`You will run with the youth group at 12:30pm, your race number is ${raceNumber}.`)
}
