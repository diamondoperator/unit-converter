
//get value from input field
let convertButton = document.getElementById("convert");

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

convertButton.addEventListener("click",function(){
    let input = document.getElementById("inputValue").value;
    console.log("clicked");
    console.log(input);

    //meters to feet
    let feet = input * 3.281
    console.log(`${input} meters = ${feet.toFixed(3)} feet`);
    //feet to meters
    let meters = input / 3.281
    console.log(`${input} feet = ${meters.toFixed(3)} meters`);


    //liters to gallons
    let gallons = input * 0.264;
    console.log(`${input} liters = ${gallons.toFixed(3)} gallons`);
    //gallons to liters
    let liters = input / 0.264
    console.log(`${input} gallons = ${liters.toFixed(3)} liters`);

    //kilograms to pounds
    let pounds = input * 2.204;
    console.log(`${input} kilograms = ${pounds.toFixed(3)} pounds`);
    //pounds to kilograms
    let kilograms = input / 2.204;
    console.log(`${input} pounds = ${kilograms.toFixed(3)} kilograms`);

})