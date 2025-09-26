const ratingButtons = document.querySelectorAll(".rating-btn");
const submitButton = document.querySelector(".submit-btn");
const form = document.querySelector("form");

let selectedRating = "";

ratingButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    ratingButtons.forEach((btn) => btn.classList.remove("selected"));

    this.classList.add("selected");

    selectedRating = index + 1;

    submitButton.disabled = false;
    submitButton.style.opacity = "1";

    console.log("Selected rating:", selectedRating);
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (selectedRating === null) {
    alert("Please select a rating before submitting!");
    return;
  }

  console.log("Submitted rating:", selectedRating);

  showThankYou();
});

function showThankYou() {
  form.innerHTML = `
    <div style="text-align: center; padding: 2rem 0;">
      <img src="images/illustration-thank-you.svg" alt="Thank you" style="margin-bottom: 1rem;">
      <h2 style="color: var(--orange); margin-bottom: 1rem;">You selected ${selectedRating} out of 5</h2>
      <h1 style="color: var(--white); margin-bottom: 1rem;">Thank you!</h1>
      <p style="color: var(--ltGray);">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  `;
}
