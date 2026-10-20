function lampSwitch() {
    let lamp = document.getElementsByClassName("light");

    if (lamp[0].id === "lamp-off") {
        document.getElementById("lamp-off").id = "lamp-on";
    } else if (lamp[0].id === "lamp-on") {
        document.getElementById("lamp-on").id = "lamp-off";
    } else {
        console.log("how did this happen?");
    }
}