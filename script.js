function calculateCalories() {
    const sex = document.getElementById('sex').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const activity = parseFloat(document.getElementById('activity').value);

    let bmr;

    // Calculate BMR based on sex
    if (sex === 'male') {
        bmr = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    } else {
        bmr = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
    }

    // Calorie calculations for different goals
    const maintainCalories = bmr * activity;
    const loseWeightCalories = maintainCalories - 500; // 500 calorie deficit for weight loss
    const gainWeightCalories = maintainCalories + 500; // 500 calorie surplus for weight gain

    // Display results
    document.getElementById('result').innerHTML = `
        <p>To maintain your weight: <strong>${Math.round(maintainCalories)} calories/day</strong></p>
        <p>To lose weight: <strong>${Math.round(loseWeightCalories)} calories/day</strong></p>
        <p>To gain weight: <strong>${Math.round(gainWeightCalories)} calories/day</strong></p>
    `;
}
