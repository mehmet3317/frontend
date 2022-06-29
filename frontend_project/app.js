let itemLijst = document.getElementById("myDIV")

console.log(itemLijst.children)
function tonen(e) {
    console.log(e.firstChild.nextSibling.innerHTML)
    for (let x = 0; x < itemLijst.children.length; x++) {
        console.log(itemLijst.children[x].lastChild.previousSibling.innerHTML)
        if (itemLijst.children[x].firstChild.nextSibling.innerHTML == e.firstChild.nextSibling.innerHTML) {
            itemLijst.children[x].lastChild.previousSibling.style.display = "block" && "inline-block"
        } else {
            itemLijst.children[x].lastChild.previousSibling.style.display = "none"
        }
    }
}
//let titel = document.getElementById("newTitel")


function welkom() {
    let naam = document.getElementById("fname").value

    document.getElementById("newTitel").innerHTML ="Welkom " + naam
    var x = document.getElementById("fname");
    x.style.display = "none";
    document.getElementById("btn").style.visibility = "hidden";

    // if (x.style.display === "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }
    
} 