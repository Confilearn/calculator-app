const display = document.getElementById("display");

const numeric = document.querySelectorAll("#numeric");
const operator = document.querySelectorAll("#operator");
const allClear = document.querySelector("#allClear");
const del = document.querySelector("#del");
const percent = document.querySelector("#percent");
const equal = document.querySelector("#equal");

resultLength = () => {
  if (display.innerText.length > 35) {
    display.style.fontSize = "32px";
  }
  if (display.innerText.length > 50) {
    display.innerText = "";
  }
};

numeric.forEach((item) => {
  item.addEventListener("click", function () {
    resultLength();

    display.innerText += this.value;
  });
});

operator.forEach((item) => {
  item.addEventListener("click", function () {
    resultLength();

    // if (display.innerText.includes("+")) return;
    // if (display.innerText.includes("-")) return;
    // if (display.innerText.includes("/")) return;
    // if (display.innerText.includes("*")) return;
    // if (display.innerText.includes(".")) return;

    display.innerText += this.value;
  });
});

allClear.addEventListener("click", function () {
  display.innerText = "";
});

del.addEventListener("click", function () {
  display.innerText = display.innerText.toString().slice(0, -1);
});

percent.addEventListener("click", function () {
  let percentage = eval(display.innerText) / 100;
  display.innerText = percentage;
});

equal.addEventListener("click", function () {
  display.innerText = eval(display.innerText);
});

// TODO: CAN'T EVALUATE IF THE DISPLAY CONTAINS AN OPERATOR OR DOT.
