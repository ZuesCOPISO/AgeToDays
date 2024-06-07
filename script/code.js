function calculateDays () {
    const ageInput = document.getElementById("age-input");
    const ageInYears = parseInt(ageInput.value);
    if (isNaN(ageInYears) || ageInYears < 0) {
        document.getElementById("result").textContent = "Please enter valid age.";
        return;
    }
    const ageInDays = ageInYears * 365;document.getElementById("result").textContent = `Your age in days is: ${ageInDays}` ;

}