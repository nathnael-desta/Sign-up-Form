const password1 = document.querySelector(".first");
const password2 = document.querySelector(".second");
const passwordlabel = document.querySelector('label[for="password"]')

function check() {
  if (password1.value != password2.value) {
    password1.classList.add("invalid");
    passwordlabel.classList.add("text");
  } else {
    password1.classList.remove("invalid");
    passwordlabel.classList.remove("text");
  }
}

password1.addEventListener("input", check);
password2.addEventListener("input", check);
