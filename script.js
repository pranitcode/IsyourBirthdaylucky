const birthDate = document.getElementById("birth-date");
const luckyNumber = document.getElementById("lucky-number");
const show = document.getElementById("show");
const outputbox = document.getElementById("outputbox");


show.addEventListener("click", () => {
    let birthdayDate = birthDate.value;
    let sum = forsum(birthdayDate);
    showOutput(sum, luckyNumber.value)
   
});


function forsum(birthdayDate) {
    birthdayDate = birthdayDate.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < birthdayDate.length; i++) {
    sum = sum + Number(birthdayDate.charAt(i));
    }
    return sum;
};

function showOutput(sum, luckyNum) {
    if (sum % luckyNum === 0) {
        outputbox.innerText = "your Birthday is lucky 😀"
    } else {
        outputbox.innerText = " your Birthday is not lucky"
    }
}

