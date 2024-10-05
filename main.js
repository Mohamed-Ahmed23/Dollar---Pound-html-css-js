let dollar = document.getElementById("dollar");
let pound = document.getElementById("pound");

dollar.onkeyup = function () {
    pound.value = dollar.value * 48.31;
}

pound.onkeyup = function () {
    dollar.value = pound.value / 48.31;
}