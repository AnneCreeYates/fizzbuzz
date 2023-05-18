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
  const reset_btn = document.createElement("button");
  reset_btn.innerHTML = "Reset";
  let section = document.getElementById("buttons_group");
  section.appendChild(reset_btn);

  reset_btn.addEventListener("click", () => {
    reset_buttons_func(reset_btn, section);
    reset_text_func();
  });
};

const remove_start_again_btn = () => {
  // this function is to remove the start again button and put up a reset button insead
};

const reset_buttons_func = (reset_btn, section) => {
  const begin_again_btn = document.createElement("button");
  begin_again_btn.innerHTML = "Start again";
  reset_btn.remove();
  section.appendChild(begin_again_btn);

  //add a function that regenerated the text after pressing start again
  begin_again_btn.addEventListener("click", () => {
    fizzbuzz_func();
    // remove_start_again_btn();
    add_reset_btn();
  });
};

const reset_text_func = () => {
  // this function removed only the elements from the paga. The paragraf itself remains.
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
