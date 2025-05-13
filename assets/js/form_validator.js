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

function updateButtonState(submitButton, state) {
    switch (state) {
        case 'sending':
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            submitButton.style.backgroundColor = '#666';
            submitButton.style.cursor = 'not-allowed';
            break;
        case 'sent':
            submitButton.textContent = 'Already sent';
            submitButton.disabled = true;
            submitButton.style.backgroundColor = '#4CAF50';
            submitButton.style.cursor = 'not-allowed';
            break;
        default:
            submitButton.textContent = 'Join Fight Club';
            submitButton.disabled = false;
            submitButton.style.backgroundColor = '';
            submitButton.style.cursor = '';
    }
}

const formToValidate = document.querySelector("form[name='Cooperation form']");
const textInputs = formToValidate.querySelectorAll("input[type='text'], textarea");
const submitButton = formToValidate.querySelector('button[type="submit"]');

textInputs.forEach(input => {
    input.addEventListener('input', () => validateEnglishInput(input));
});

formToValidate.addEventListener("submit", async (event) => {
    event.preventDefault();
    let isValid = true;

    textInputs.forEach(input => {
        validateEnglishInput(input);
        if (input.validity.customError) {
            isValid = false;
        }
    });

    if (!isValid) {
        return;
    }

    updateButtonState(submitButton, 'sending');

    try {
        await new Promise(resolve => setTimeout(resolve, 1500));

        updateButtonState(submitButton, 'sent');

        formToValidate.reset();
    } catch (error) {
        updateButtonState(submitButton, 'default');
        console.error('Form submission failed:', error);
    }
});
