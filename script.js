const disPlay = document.getElementById("display");

function appendToDisplay(input) {
  disPlay.value += input;
}
function clearDisplay() {
  disPlay.value = "";
}
function calculate() {
  try {
    disPlay.value = eval(disPlay.value);
  } catch (error) {
    disPlay.value = "Error";
  }
}
