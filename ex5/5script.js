let fitnessCenter = { visits: "" };
 for (let i = 0; i < 2; i++) {
     let name = prompt("Enter your full name:");
     let count = prompt("How many times a week do you visit the fitness center?");
     fitnessCenter.visits += `${name} ${count}\n`;
 
     document.getElementById("output").innerText = fitnessCenter.visits;
 }