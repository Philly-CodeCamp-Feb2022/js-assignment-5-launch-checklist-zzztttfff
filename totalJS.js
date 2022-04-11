//--------------------
//SCRIPT_HELPER.JS
// Write your helper functions here!
//require('isomorphic-fetch');

let html = document;

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let target = html.getElementById("missionTarget");
    target.innerHTML = 
    `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${document.name}</li>
            <li>Diameter: ${document.diameter}</li>
            <li>Star: ${document.star}</li>
            <li>Distance from Earth: ${document.distance}</li>
            <li>Number of Moons: ${document.moons}</li>
        </ol>
        <img src="${document.image}"/>
    `;
}


//PREVENTDEFAULT ONLY WORKS ONE TIME FOR NON-EMPTY ENTRIES
//IS THIS DUE TO CURRENTINPUTNUM NOT ALLOWING FOR REITERATION?
let currentInputNum = 0;

function validateInput(inpoot) {
    if (inpoot === "") {
        alert("Provide the required information!")
        window.event.preventDefault(false);
        currentInputNum++
        console.log('empty')
        return "Empty"
    }

    if (currentInputNum === 0) {
        for (let i = 0; i < 10; i++) {
            if (inpoot.includes(i)){
                alert("Pilot name cannot include numbers!")
                window.event.preventDefault(false);
                console.log(inpoot + ' is a num')
                return "is  a number"
            }
        }
        {currentInputNum++; return}; 
    }
    if (currentInputNum === 1) {

        for (let i = 0; i < 10; i++) {
            if (inpoot.includes(i)){
                alert("Copilot name cannot include numbers!")
                window.event.preventDefault();
                return `${inpoot} is  a number`
            }
        }
        {currentInputNum++; return};
    }
    if (currentInputNum === 2) {
        if (isNaN(inpoot)) {
            alert("Fuel level must be a number!")
            window.event.preventDefault(false);
            return `${inpoot} is not a number`
        }
        else {currentInputNum++; return};
    }
    if (currentInputNum === 3) {
        if (isNaN(inpoot)) {
            alert("Cargo mass must be a number!")
            window.event.preventDefault(false);
            return `${inpoot} is not a number`
        }
        else {currentInputNum++; return};
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //window.event.preventDefault();
    //let form = document.getElementById("launchForm");
    //window.addEventListener("load", function(event) {

        //UPDATING SHUTTLE REQUIREMENTS

        //PILOT & COPILOT
        let pilotStat = html.getElementById("pilotStatus");
        pilotStat.innerHTML += `. Pilot's name is ${pilot}.`
        //console.log(pilotStat.innerHTML)

        let copilotStat = html.getElementById("copilotStatus");
        copilotStat.innerHTML += `. Copilot's name is ${copilot}.`
        //console.log(copilotStat.innerHTML)
        
        
        //FUEL AND CARGO
        let fuelStat = html.getElementById("fuelStatus").innerHTML
        let launchStat = html.getElementById("launchStatus")
        let cargoStat = html.getElementById("cargoStatus")

        if (fuelLevel < 10000) {
            html.getElementById("faultyItems").value = "visible";
            fuelStat = `There isn't enough FUEL!`
            html.getElementById("fuelStatus").innerHTML = fuelStat
            launchStat.innerHTML = `Shuttle not ready for launch`
            launchStat.style.color="red"
            list.style.visibility="visible"
            window.event.preventDefault();
        }
        if (cargoLevel > 10000) {
            html.getElementById("faultyItems").value = "visible";
            cargoStat = `The cargo is too heavy.`
            html.getElementById("cargoStatus").innerHTML = cargoStat
            launchStat.innerHTML = `Shuttle not ready for launch`
            launchStat.style.color="red"
            list.style.visibility="visible"
            window.event.preventDefault();
        }
        //READY
        if (launchStat.innerHTML !== `Shuttle not ready for launch`){
            launchStat.innerHTML = "Shuttle is ready for launch"
            launchStat.style.color="green"
            window.event.preventDefault();
        }
    //});
}


async function myFetch() {
    let planetsReturned;
    
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            if (response.status >= 400) {
                throw new Error ("Bad response");
            }
            else {
                return response.json();
            }
        });
    return planetsReturned;
}


function pickPlanet(planets) {
    let index = Math.round(Math.random()*planets.length);
    return planets[index];
}
//-------------------
// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
//-------------------
//END SCRIPT_HELPER.JS










//START SCRIPT.JS
//------------------

window.addEventListener("load", function(event) {
    //console.log(document)
    //console.log(document.getElementById("launchForm"))
    let listedPlanets;

    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;

        let chosenPlanet = pickPlanet(listedPlanets);       
        addDestinationInfo(chosenPlanet);
    });

    window.addEventListener("submit", function(event) {
        //event.preventDefault();

        let userInputPilot = document.querySelector("input[name=pilotName]").value
        let userInputCoPilot = document.querySelector("input[name=copilotName]").value
        let userInputFuel = document.querySelector("input[name=fuelLevel]").value
        let userInputCargo = document.querySelector("input[name=cargoMass]").value
    
        let inputArray = [userInputPilot, userInputCoPilot, userInputFuel, userInputCargo];

        for (item in inputArray) {
            let currentInput = inputArray[item]
            validateInput(currentInput);
        };

        let lForm = document.getElementById("launchForm")
        let lStatus = document.getElementById("faultyItems")
        //this.window.addEventListener("load", function(event) {
            formSubmission(lForm, lStatus, inputArray[0], inputArray[1], inputArray[2], inputArray[3])
            //formSubmission(document.querySelector("launchForm"));
            //document.querySelector("input[name=SampleHTMLName]");
        //});


    });

});
//-------------------
// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet;
// module.exports.myFetch = myFetch;
//-------------------
//END SCRIPT.JS