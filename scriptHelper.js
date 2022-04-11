// // Write your helper functions here!
// require('isomorphic-fetch');

// function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//     // Here is the HTML formatting for our mission target div.
//     <script>
   
//     <h2>Mission Destination</h2>
//     <ol>
//         <li>Name: </li>
//         <li>Diameter: </li>
//         <li>Star: ${star}</li>
//         <li>Distance from Earth: </li>
//         <li>Number of Moons: </li>
//     </ol>
//     <img src=""/>
   
//     </script>
// }

// function validateInput(testInput) {
//     if (testInput.value === "") {
//         return "Empty"
//     }
//     else if (typeof testInput.value === number) {
//         return "Is a number"
//     }
//     else if (typeof isNaN(testInput.value)) {
//         return "Not a number"
//     }
// }

// function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//     let form = document.querySelector("launchForm");
//     form.addEventListener("submit", function(event) {


//         //UPDATING SHUTTLE REQUIREMENTS

//         //PILOT & COPILOT STATUS
//         let pilotName = document.querySelector("pilotName").value;
//         let pilotStat = document.querySelector("pilotStatus");
//         pilotStat.innerHTML += `. Pilot's name is ${pilotName}.`

//         let copilotName = document.querySelector("copilotName").value;
//         let copilotStat = document.querySelector("copilotStatus");
//         copilotStat.innerHTML += `. Copilot's name is ${copilotName}.`
        
//         //FUEL AND CARGO
//         let fuelLev = document.querySelector("fuelLevel");
//         let fuelStat = document.querySelector("fuelStatus")
//         let launchStat = document.querySelector("launchStatus")
//         let cargoM = document.querySelector("cargoMass")
//         let cargoStat = document.querySelector("cargoStatus")

//         if (fuelLev < 10000) {
//             document.querySelector("faultyItems").value = "visible";
//             fuelStat.innerHTML = `There ain't enough fyool!`
//             launchStat.innerHTML = `Shuttle not ready for launch`
//             launchStat.style.color="red"
//         }
//         if (cargoM > 10000) {
//             document.querySelector("faultyItems").value = "visible";
//             cargoStat.innerHTML = `The cargo is too heavy!`
//             launchStat.innerHTML = `Shuttle not ready for launch`
//             launchStat.style.color="red"
//         }

//         //READY
//         if (launchStat.innerHTML !== `Shuttle not ready for launch`){
//             launchStat.style.color="green"
//             console.log("Shuttle is ready for launch")
//         }

//     });
// }


// async function myFetch() {
//     let planetsReturned;
    
//     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
//             if (response.status >= 400) {
//                 throw new Error ("Bad response");
//             }
//             else {
//                 return response.json();
//             }
//         });
//     return planetsReturned;
// }


// function pickPlanet(planets) {
//     let index = Math.round(Math.random()*planets.length);
//     return planets[index];
// }

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;







//CAN DELETE
//     async function myFetch() {
//     //CREATED THIS BEFORE USING PROVIDED CODE...PROBABLY NOT NEEDED
//     // fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
//     //     return response.json()
//     // });
//     //PROVIDED CODE
//     let planetsReturned;
//     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
//         response.json().then(function(json) {
//             planetsReturned = json;
//             if (response.status >= 400) {
//                 throw new Error ("Bad response");
//             }
//             else {
//                 return response.json();
//             }
//             // console.log(json)
//             // return response.json();
//         });
//         //return planetsReturned;   
//     console.log(planetsReturned)
//     return planetsReturned;
// }
