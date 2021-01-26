function getNumber(num) {
  var screen = document.getElementById("screen");
  screen.value += num;
}


function clearNumber() {
    screen = document.getElementById("screen");
    screen.value = "";
}

function getResult() {
    screen = document.getElementById("screen");
    screen.value = eval(screen.value);
}
