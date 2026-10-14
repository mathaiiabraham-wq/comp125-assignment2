function changeSystem() {
    let sys = document.getElementById("sys").value;
    let hUnit = document.getElementById("hUnit");
    let wUnit = document.getElementById("wUnit");
    
    if (sys == "metric") {
        hUnit.innerHTML = "(cm)";
        wUnit.innerHTML = "(kg)";
    } else {
        hUnit.innerHTML = "(inches)";
        wUnit.innerHTML = "(lbs)";
    }
}

function calculateBMR() {
    let form = document.getElementById("bmrForm");
    if (form.checkValidity() == false) {
        form.reportValidity();
        return;
    }

    let sys = document.getElementById("sys").value;
    let gender = document.getElementById("gender").value;
    let age = Number(document.getElementById("age").value);
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);

    if (sys == "imperial") {
        height = height * 2.54;
        weight = weight / 2.20462;
    }

    let activityNodes = document.querySelectorAll('input[name="activity"]');
    let coef = 1.2;
    for (let i = 0; i < activityNodes.length; i++) {
        if (activityNodes[i].checked == true) {
            coef = Number(activityNodes[i].value);
        }
    }

    let bmr = 0;
    if (gender == 'M') {
        bmr = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
    } else {
        bmr = 9.247 * weight + 3.098 * height - 4.330 * age + 447.593;
    }

    let dailyCalories = bmr * coef;

    let resultBox = document.getElementById("resultBox");
    resultBox.innerHTML = "Your BMR: " + bmr.toFixed(2) + "<br><br>Daily Calorie Intake: " + dailyCalories.toFixed(2);
}