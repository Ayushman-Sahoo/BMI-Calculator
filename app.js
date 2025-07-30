// When 'Calculate BMI' button is clicked
document.querySelector("#calculateBtn").addEventListener("click", () => {
  // Get input values
  const weight = parseFloat(document.querySelector("#weight").value);
  const height = parseFloat(document.querySelector("#height").value);
  const para = document.querySelector("#p");
  const show = document.querySelector("#show");

  // Validate user input
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    para.innerHTML = "Please enter valid positive numbers for both fields.";
    show.innerHTML = "";
    show.style.color = "black";
    return;
  }

  // Calculate BMI
  const bmi = weight / ((height / 100) ** 2);
  const bmiValue = bmi.toFixed(2); // Round to 2 decimal places
  para.innerHTML = `Your BMI :- ${bmiValue}`;

  // Calculate ideal weight range for the given height
  const minWeight = (18.5 * (height / 100) ** 2).toFixed(1);
  const maxWeight = (24.9 * (height / 100) ** 2).toFixed(1);
  para.innerHTML += `<br/>Ideal weight range: ${minWeight}kg - ${maxWeight}kg`;

  // Determine BMI category and set result color
  let category = "";
  if (bmi <= 18.5) {
    category = "Underweight";
    show.style.color = "yellow";
  } else if (bmi <= 24.9) {
    category = "Normal";
    show.style.color = "green";
  } else if (bmi < 29.9) {
    category = "Overweight";
    show.style.color = "orange";
  } else {
    category = "Obese";
    show.style.color = "red";
  }

  // Show BMI category
  show.innerHTML = category;
});

// When 'Reset' button is clicked
document.querySelector("#resetBtn").addEventListener("click", () => {
  // Clear input fields
  document.querySelector("#weight").value = "";
  document.querySelector("#height").value = "";

  // Reset output content
  const para = document.querySelector("#p");
  const show = document.querySelector("#show");
  para.innerHTML = "Your BMI :-";
  show.innerHTML = "";
  show.style.color = "black";
});