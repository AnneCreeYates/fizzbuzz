const start_btn = document.getElementById("start_btn");
const nums = 100;

const fizzbuzz_func = () => {
  for (let i = 0; i < nums; i++) {
    let elem = document.createElement("elem");
    if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {
      elem.textContent = " FizzBuzz, ";
      elem.style.color = "purple";
    } else if ((i + 1) % 3 == 0) {
      elem.textContent = " Fizz, ";
      elem.style.color = "blue";
    } else if ((i + 1) % 5 == 0) {
      elem.textContent = " Buzz, ";
      elem.style.color = "red";
    } else {
      elem.textContent = " " + (i + 1) + ",";
      elem.style.color = "black";
    }
    document.getElementsByClassName("generatedText")[0].appendChild(elem);
  }
};

const remove_start_btn = () => {
  start_btn.remove();
};

const add_reset_btn = () => {
  //add a reset button in place of start
  const reset_btn = document.createElement("button");
  reset_btn.innerHTML = "Reset";
  let section = document.getElementById("buttons_group");
  section.appendChild(reset_btn);
};

start_btn.addEventListener("click", () => {
  fizzbuzz_func();
  remove_start_btn();
  add_reset_btn();
});

// make a function adding the pause, stop and reset buttons
