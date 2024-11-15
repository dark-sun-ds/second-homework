const form = document.getElementById("form");
const fioInput = document.getElementById("fio");
const passwordInput = document.getElementById("password");
const fioError = document.getElementById("fioError");
const passwordError = document.getElementById("passwordError");
const submitBtn = document.getElementById("submitBtn");

let isValidName;
let isValidPassword;

fioInput.addEventListener("input", () => {
  const fioRegex = /^[а-яёА-ЯЁa-zA-Z\s]+$/i;
  if (!fioRegex.test(fioInput.value)) {
    fioError.textContent = "Use only letters";
    console.log("fio error");
    fioInput.classList.remove("form__input--valid");
    fioInput.classList.add("form__input--invalid");
    isValidName = false;
  } else {
    fioError.textContent = "";
    fioInput.classList.add("form__input--valid");
    fioInput.classList.remove("form__input--invalid");
    isValidName = true;
  }
});

passwordInput.addEventListener("input", () => {
  const passwordRegex = /^[^-\/_]{8,}$/;
  if (!passwordRegex.test(passwordInput.value)) {
    passwordError.textContent = "Length > 8, Not Use -*/_";
    passwordInput.classList.remove("form__input--valid");
    passwordInput.classList.add("form__input--invalid");
    isValidPassword = false;
  } else {
    passwordError.textContent = "";
    passwordInput.classList.remove("form__input--invalid");
    passwordInput.classList.add("form__input--valid");
    isValidPassword = true;
  }
});

submitBtn.addEventListener("click", (event) => {
  if (isValidName && isValidPassword) {
    alert("Form is valid");
    form.submit();
  } else {
    alert("Form is not valid");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
