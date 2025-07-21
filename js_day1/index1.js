const btnEl = document.querySelector('.btn');
const inputEl = document.querySelector('input');
const messageEl = document.querySelector('.message');
const errorEl = document.querySelector('.error');

//Elements for live rule checks
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const numberEl = document.getElementById('number');
const specialEl = document.getElementById('special');

btnEl.addEventListener('click', PasswordChecker);
inputEl.addEventListener('keyup', updateLiveRules);

function PasswordChecker(){
    let password = inputEl.value;
    let isLongEnough = password.length >= 8;
let hasUppercase = /[A-Z]/.test(password);
let hasNumber = /[0-9]/.test(password);
let hasSpecialChar = /[!@#$%^&*]/.test(password);

    if (isLongEnough && hasUppercase && hasNumber && hasSpecialChar) {

    // Strong password
     showMessage("Strong password ✅")
    inputEl.value = '';
} else {
    // Show error
    showMessage("Password too weak ❌");
    errorEl.style.display = 'block';
        setTimeout(()=>{
            errorEl.style.display = 'none';

        }, 1000);
}

}

function updateLiveRules() {
  const password = inputEl.value;

  // Live update ✅/❌
  lengthEl.textContent = (password.length >= 8 ? "✅" : "❌") + " Minimum 8 characters";
  uppercaseEl.textContent = (/[A-Z]/.test(password) ? "✅" : "❌") + " At least one uppercase letter";
  numberEl.textContent = (/[0-9]/.test(password) ? "✅" : "❌") + " At least one number";
  specialEl.textContent = (/[!@#$%^&*]/.test(password) ? "✅" : "❌") + " At least one special character (!@#$%^&*)";
}

function showMessage(text){
     messageEl.textContent = text;
}




