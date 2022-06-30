let keuze = document.getElementById("spel")
let pc = document.getElementById("pckeuze")
let winnaar = document.getElementById("winnaar")
let eigenKeuze = document.getElementById("eigenKeuze")

let opties = ["blad", "steen", "schaar"]
let puntenU = 0;
let puntenPC = 0;

function uitslag(){
    let pckeuze = Math.round(Math.random()*2)
    console.log(opties[pckeuze])
    pc.innerHTML = `Keuze van de computer: ${opties[pckeuze]}`
    eigenKeuze.innerHTML = `jouw keuze ${keuze.value}`
}


if(keuze.value == "blad" && opties[pckeuze] == "blad"){
    winnaar.innerHTML += `<li> Geen winnaar, je hebt nu ${puntenU} punten. </li>`
}
if(keuze.value == "steen" && opties[pckeuze] == "blad"){
    winnaar.innerHTML += `<li> Je verliest, je hebt nu ${puntenU} punten. </li>`
}
if(keuze.value == "schaar" && opties[pckeuze] == "blad"){
    puntenU++
    winnaar.innerHTML += `<li> Je wint, je hebt nu ${puntenU} punten. </li>`
}
if(keuze.value == "blad" && opties[pckeuze] == "steen"){
    puntenU++
    winnaar.innerHTML += `<li> Je winnt, je hebt nu ${puntenU} punten. </li>`
}
if(keuze.value == "steen" && opties[pckeuze] == "steen"){
    winnaar.innerHTML += `<li> Geen winnaar, je hebt nu ${puntenU} punten. </li>`
}
if(keuze.value == "schaar" && opties[pckeuze] == "steen"){
    winnaar.innerHTML += `<li> Je verliest, je hebt nu ${puntenU} punten. </li>`
}
if(keuze.value == "blad" && opties[pckeuze] == "schaar"){
    winnaar.innerHTML += `<li> Je verliest, je hebt nu ${puntenU} punten. </li>`
}
if(keuze.value == "steen" && opties[pckeuze] == "schaar"){
    winnaar.innerHTML += `<li> Je winnt, je hebt nu ${puntenU} punten. </li>`
}
if(keuze.value == "schaar" && opties[pckeuze] == "schaar"){
    winnaar.innerHTML += `<li> geen winnaar </li>`
}