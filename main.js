const start_btn = document.getElementById("start_btn");

const fizzbuzz_func = () => {
  for (let i = 0; i < 100; i++) {
    let span = document.createElement("span");
    if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {
      // this part needs to add visualisation for the words in the animation section
      //   document.getElementsByClassName("generatedText")[0].textContent +=
      //     " FizzBuzz,";
      span.textContent = " FizzBuzz, ";
      span.style.color = "purple";
    } else if ((i + 1) % 3 == 0) {
      // this part needs to add visualisation for the words in the animation section
      //   document.getElementsByClassName("generatedText")[0].textContent +=
      //     " Fizz,";
      span.textContent = " Fizz, ";
      span.style.color = "blue";
    } else if ((i + 1) % 5 == 0) {
      // this part needs to add visualisation for the words in the animation section
      //   document.getElementsByClassName("generatedText")[0].textContent +=
      //     " Buzz,";
      span.textContent = " Buzz, ";
      span.style.color = "red";
    } else {
      // this part needs to add visualisation for the number in the animation section
      //   document.getElementsByClassName("generatedText")[0].textContent +=
      //     " " + (i + 1) + ",";
      span.textContent = " " + (i + 1) + ",";
      span.style.color = "black";
    }
    document.getElementsByClassName("generatedText")[0].appendChild(span);
  }
};

// make a function removing the start button
// make a function adding the pause, stop and reset buttons

// add function for functionality of every button

start_btn.addEventListener("click", fizzbuzz_func);
