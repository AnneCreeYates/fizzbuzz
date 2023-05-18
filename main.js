const start_btn = document.getElementById("start_btn");
const nums = 100;

const fizzbuzz_func = () => {
  for (let i = 1; i <= nums; i++) {
    let elem = document.createElement("elem");
    if (i % 3 == 0 && i % 5 == 0) {
      elem.textContent = " FizzBuzz, ";
      elem.style.fontFamily = "Henny Penny";
      elem.style.color = "violet";
      elem.style.fontSize = "2em";
    } else if (i % 3 == 0) {
      elem.textContent = " Fizz, ";
      elem.style.fontFamily = "Henny Penny";
      elem.style.color = "green";
      elem.style.fontSize = "1.5em";
    } else if (i % 5 == 0) {
      if (i == nums) {
        elem.textContent = " Buzz.";
        elem.style.fontFamily = "Henny Penny";
        elem.style.color = "orange";
        elem.style.fontSize = "1.7em";
      } else {
        elem.textContent = " Buzz, ";
        elem.style.fontFamily = "Henny Penny";
        elem.style.color = "orange";
        elem.style.fontSize = "1.8em";
      }
    } else {
      elem.textContent = " " + i + ",";
      elem.style.color = "black";
    }
    document.getElementsByClassName("generatedText")[0].appendChild(elem);
  }
};

const remove_start_btn = () => {
  start_btn.remove();
};

const add_reset_btn = () => {
  const reset_btn = document.createElement("button");
  reset_btn.innerHTML = "Reset";
  let section = document.getElementById("buttons_group");
  section.appendChild(reset_btn);

  reset_btn.addEventListener("click", () => {
    reset_buttons_func(reset_btn, section);
    reset_text_func();
  });
};

const reset_buttons_func = (reset_btn, section) => {
  const start_again_btn = document.createElement("button");
  start_again_btn.innerHTML = "Start again";
  reset_btn.remove();
  section.appendChild(start_again_btn);

  const remove_start_again_btn = (start_again_btn) => {
    start_again_btn.remove();
  };

  start_again_btn.addEventListener("click", () => {
    fizzbuzz_func();
    remove_start_again_btn(start_again_btn);
    add_reset_btn();
  });
};

const reset_text_func = () => {
  // this function removed only the elements from the paga. The paragraph itself remains.
  para_holding_text = document.getElementsByClassName("generatedText");
  while (para_holding_text[0].firstChild) {
    para_holding_text[0].removeChild(para_holding_text[0].firstChild);
  }
};

start_btn.addEventListener("click", () => {
  fizzbuzz_func();
  remove_start_btn();
  add_reset_btn();
});
