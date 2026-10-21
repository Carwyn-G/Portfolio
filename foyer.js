function donCoat() {
    console.log("clicked")
    document.getElementById("coat-hanging").id = "coat-worn";
    document.getElementById("doffed-coat").id = "donned-coat";
    document.getElementById("doffed-arm").id = "donned-arm";
    document.getElementById("coathook-btn").onclick = doffCoat;
    document.getElementById("worncoat-btn").onclick = doffCoat;
}

function donHat(){
    document.getElementById("hat-hanging").id = "hat-worn";
    document.getElementById("doffed-hat").id = "donned-hat";
    document.getElementById("hathook-btn").onclick = doffHat;
    document.getElementById("wornhat-btn").onclick = doffHat;
}

function doffCoat(){
    document.getElementById("donned-coat").id = "doffed-coat";
    document.getElementById("donned-arm").id = "doffed-arm";
    document.getElementById("coat-worn").id = "coat-hanging";
    document.getElementById("coathook-btn").onclick = donCoat;
    document.getElementById("worncoat-btn").onclick = donCoat;
}

function doffHat(){
    document.getElementById("donned-hat").id = "doffed-hat";
    document.getElementById("hat-worn").id = "hat-hanging";
    document.getElementById("hathook-btn").onclick = donHat;
    document.getElementById("wornhat-btn").onclick = donHat;
}