function addValue(value) {
      document.getElementById("display").value += value;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function deleteLast() {
    var text = document.getElementById("display").value;
    document.getElementById("display").value = text.slice(0, text.length - 1);
}
function calculate() {
    var text = document.getElementById("display").value;
    var result = "";
  
    if (text.indexOf("+") != -1) {
        var p = text.split("+");
        result = Number(p[0]) + Number(p[1]);
    } else if (text.indexOf("-") != -1) {
        var p = text.split("-");
        result = Number(p[0]) - Number(p[1]);
    } else if (text.indexOf("x") != -1) {
        var p = text.split("x");
        result = Number(p[0]) * Number(p[1]);
    } else if (text.indexOf("/") != -1) {
        var p = text.split("/");
        result = Number(p[0]) / Number(p[1]);
    }
    document.getElementById("display").value = result;
}

