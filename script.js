let loadingScreen = document.querySelector(".loadingScreen");
window.addEventListener('load', function() {
    loadingScreen.style.display = 'none';
})

function hamburger() {
  let x = document.getElementById("navbar");
  if (x.className === "topnav default") {
    x.className = "topnav expanded";
    document.getElementById("menu-icon").src = "images/close.png"
    document.getElementById("menu-icon").alt = "click to close the menu"
  }
  else {
    x.className = "topnav default";    
    document.getElementById("menu-icon").src = "images/hamburger.png";
    document.getElementById("menu-icon").alt = "click to open the menu"
    }
} 

function expandCases() {
  let y = document.getElementById("submenu");
  if (y.className === "submenu expandable") {
    y.className = "submenu expanded-explore"
    document.getElementById("arrow").id = "arrowup"
  }
  else {
    y.className = "submenu expandable"
    document.getElementById("arrowup").id = "arrow"
  }
}


function nextImg(a){
    if (a === "rise") {
        let one = document.getElementsByClassName("rise-one");
        let two = document.getElementsByClassName("rise-two");
        let three = document.getElementsByClassName("rise-three");
        if (one[0].id === "rise-top") {
            one[0].id = "rise-left";
            two[0].id = "rise-top";
            three[0].id = "rise-right";
        } else if (one[0].id === "rise-left") {
            one[0].id = "rise-right";
            two[0].id = "rise-left";
            three[0].id = "rise-top";
        } else if (one[0].id === "rise-right") {
            one[0].id = "rise-top";
            two[0].id = "rise-right";
            three[0].id = "rise-left";
        }
    } else if (a === "athena") {
        let one = document.getElementsByClassName("athena-one");
        let two = document.getElementsByClassName("athena-two");
        let three = document.getElementsByClassName("athena-three");
        if (one[0].id === "athena-top") {
            one[0].id = "athena-left";
            two[0].id = "athena-top";
            three[0].id = "athena-right";
        } else if (one[0].id === "athena-left") {
            one[0].id = "athena-right";
            two[0].id = "athena-left";
            three[0].id = "athena-top";
        } else if (one[0].id === "athena-right") {
            one[0].id = "athena-top";
            two[0].id = "athena-right";
            three[0].id = "athena-left";
        }
    } else if (a === "zoo") {
        let one = document.getElementsByClassName("zoo-one");
        let two = document.getElementsByClassName("zoo-two");
        let three = document.getElementsByClassName("zoo-three");
        if (one[0].id === "zoo-top") {
            one[0].id = "zoo-left";
            two[0].id = "zoo-top";
            three[0].id = "zoo-right";
        } else if (one[0].id === "zoo-left") {
            one[0].id = "zoo-right";
            two[0].id = "zoo-left";
            three[0].id = "zoo-top";
        } else if (one[0].id === "zoo-right") {
            one[0].id = "zoo-top";
            two[0].id = "zoo-right";
            three[0].id = "zoo-left";
        }
    } else if (a === "KES") {
        let one = document.getElementsByClassName("KES-one");
        let two = document.getElementsByClassName("KES-two");
        let three = document.getElementsByClassName("KES-three");
        if (one[0].id === "KES-top") {
            one[0].id = "KES-left";
            two[0].id = "KES-top";
            three[0].id = "KES-right";
        } else if (one[0].id === "KES-left") {
            one[0].id = "KES-right";
            two[0].id = "KES-left";
            three[0].id = "KES-top";
        } else if (one[0].id === "KES-right") {
            one[0].id = "KES-top";
            two[0].id = "KES-right";
            three[0].id = "KES-left";
        }
    } else if (a === "alt") {
        console.log("clicked")
        let one = document.getElementsByClassName("alt-one");
        let two = document.getElementsByClassName("alt-two");
        let three = document.getElementsByClassName("alt-three");
        if (one[0].id === "alt-top") {
            one[0].id = "alt-left";
            two[0].id = "alt-top";
            three[0].id = "alt-right";
        } else if (one[0].id === "alt-left") {
            one[0].id = "alt-right";
            two[0].id = "alt-left";
            three[0].id = "alt-top";
        } else if (one[0].id === "alt-right") {
            one[0].id = "alt-top";
            two[0].id = "alt-right";
            three[0].id = "alt-left";
        }
    }
}

function prevImg(a){
    if (a === "rise") {
        let one = document.getElementsByClassName("rise-one");
        let two = document.getElementsByClassName("rise-two");
        let three = document.getElementsByClassName("rise-three");
        if (one[0].id === "rise-top") {
            one[0].id = "rise-right";
            two[0].id = "rise-left";
            three[0].id = "rise-top";
        } else if (one[0].id === "rise-left") {
            one[0].id = "rise-top";
            two[0].id = "rise-right";
            three[0].id = "rise-left";
        } else if (one[0].id === "rise-right") {
            one[0].id = "rise-left";
            two[0].id = "rise-top";
            three[0].id = "rise-right";
        } else {console.log("how did this happen?")}
    } else if (a === "athena") {
        let one = document.getElementsByClassName("athena-one");
        let two = document.getElementsByClassName("athena-two");
        let three = document.getElementsByClassName("athena-three");
        if (one[0].id === "athena-top") {
            one[0].id = "athena-right";
            two[0].id = "athena-left";
            three[0].id = "athena-top";
        } else if (one[0].id === "athena-left") {
            one[0].id = "athena-top";
            two[0].id = "athena-right";
            three[0].id = "athena-left";
        } else if (one[0].id === "athena-right") {
            one[0].id = "athena-left";
            two[0].id = "athena-top";
            three[0].id = "athena-right";
        } else {console.log("how did this happen?")}
    } else if (a === "zoo") {
        let one = document.getElementsByClassName("zoo-one");
        let two = document.getElementsByClassName("zoo-two");
        let three = document.getElementsByClassName("zoo-three");
        if (one[0].id === "zoo-top") {
            one[0].id = "zoo-right";
            two[0].id = "zoo-left";
            three[0].id = "zoo-top";
        } else if (one[0].id === "zoo-left") {
            one[0].id = "zoo-top";
            two[0].id = "zoo-right";
            three[0].id = "zoo-left";
        } else if (one[0].id === "zoo-right") {
            one[0].id = "zoo-left";
            two[0].id = "zoo-top";
            three[0].id = "zoo-right";
        } else {console.log("how did this happen?")}
    } else if (a === "KES") {
        let one = document.getElementsByClassName("KES-one");
        let two = document.getElementsByClassName("KES-two");
        let three = document.getElementsByClassName("KES-three");
        if (one[0].id === "KES-top") {
            one[0].id = "KES-right";
            two[0].id = "KES-left";
            three[0].id = "KES-top";
        } else if (one[0].id === "KES-left") {
            one[0].id = "KES-top";
            two[0].id = "KES-right";
            three[0].id = "KES-left";
        } else if (one[0].id === "KES-right") {
            one[0].id = "KES-left";
            two[0].id = "KES-top";
            three[0].id = "KES-right";
        } else {console.log("how did this happen?")}
    } else if (a === "alt") {
        console.log("clicked")
        let one = document.getElementsByClassName("alt-one");
        let two = document.getElementsByClassName("alt-two");
        let three = document.getElementsByClassName("alt-three");
        console.log(one[0].id);
        if (one[0].id === "alt-top") {
            one[0].id = "alt-right";
            two[0].id = "alt-left";
            three[0].id = "alt-top";
        } else if (one[0].id === "alt-left") {
            one[0].id = "alt-top";
            two[0].id = "alt-right";
            three[0].id = "alt-left";
        } else if (one[0].id === "alt-right") {
            one[0].id = "alt-left";
            two[0].id = "alt-top";
            three[0].id = "alt-right";
        } else {console.log("how did this happen?")}
    } else {console.log ("how did you get here?")}
}