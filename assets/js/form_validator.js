// Regular expression for English letters, numbers, and common punctuation
const englishOnlyRegex = /^[a-zA-Z0-9\s.,!?-]*$/;

function validateEnglishInput(input) {
  const value = input.value;
  if (!englishOnlyRegex.test(value)) {
    input.setCustomValidity('Please use only English letters, numbers, and basic punctuation');
  } else {
    input.setCustomValidity('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("form[name='Cooperation form']");
  const textInputs = form.querySelectorAll("input[type='text'], textarea");

  textInputs.forEach(input => {
    input.addEventListener('input', () => validateEnglishInput(input));
  });

  form.addEventListener("submit", (event) => {
    let isValid = true;

    textInputs.forEach(input => {
      validateEnglishInput(input);
      if (input.validity.customError) {
        isValid = false;
      }
    });

    if (!isValid) {
      event.preventDefault();
    }
  });
});
