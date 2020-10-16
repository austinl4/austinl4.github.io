function poundsToKilograms() {
    // INPUT VALUE
    let pounds = parseFloat(document.getElementById("Pounds").value);

    // PROCESSING
    let kilograms = pounds/0.45359237;

    // OUTPUTVALUE
    document.getElementById("output").textContent = kilograms.toFixed(1) + " Kilograms";
}