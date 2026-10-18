function donCoat() {
    document.getElementById("coat-hanging").id = "coat-worn";
    document.getElementById("doffed-coat").id = "donned-coat";
    document.getElementById("doffed-arm").id = "donned-arm";
}

function donHat(){
    document.getElementById("hat-hanging").id = "hat-worn";
    document.getElementById("doffed-hat").id = "donned-hat";
}

function doffCoat(){
    document.getElementById("donned-coat").id = "doffed-coat";
    document.getElementById("donned-arm").id = "doffed-arm";
    document.getElementById("coat-worn").id = "coat-hanging";
}

function doffHat(){
    document.getElementById("donned-hat").id = "doffed-hat";
    document.getElementById("hat-worn").id = "hat-hanging";
}