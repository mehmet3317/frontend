//DATUM

let datum = document.getElementById("datum")
let dag = new Date()
let options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }
let volDat = dag.toLocaleString('nl-BE', options)


datum.innerHTML = volDat;

let weekdag = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]

weekdag = weekdag[new Date().getDay()]
console.log(weekdag)

// getDay ,getDate ,getMonth , getYear
let datum1 = document.getElementById("datum1")
let date = new Date().getDate
console.log(date)

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];

const c = new Date();
d.getDate();

let jaar = new Date().getFullYear()
console.log(jaar)

datum1.innerHTML = weekdag + " " + date + " " + month + jaar

console.log(new Date().getMinutes)



// math objects

let result = Math.random()
result = Math.random() * 10
//result = (Math.round(random()*10))
console.log(result)

let speelgoed = ["bal", "pop", "lego", "beer", "auto", "puzzel", "playstation"]
let kind = speelgoed[(Math.round(Math.random() * 10))]
console.log(kind)

function test1(param1, param2, param3) {
    console.log("hallo")
    console.log(param1, param2, param3)
    return console.log(param1, param2, param3)
    console.log("goodbye")
}

test1("hello", 5, "4")
test1("hallo", 5, "4")
test1("5", "hoi", 5)

const test2 = (param4, param5) => {
    console.log(param4, param5)
}
test2("hallo", "hello")

// filter

var studenten = [
    {
        id: 1,
        naam: 'Mehmet',
        cursus: 'java',
        punten: 55
    },
    {
        id: 2,
        naam: 'ahmet',
        cursus: 'java',
        punten: 25
    },
    {
        id: 3,
        naam: 'egmen',
        cursus: 'java',
        punten: 45
    },
    {
        id: 4,
        naam: 'osman',
        cursus: 'java',
        punten: 55
    },
]
let geslaagd = studenten.filter(diploma)


function diploma(punt) {
    return punt.punten >= 50;
}
//geslaagd.sort;
geslaagd.reverse();

console.log(geslaagd)

// click events

//EVENTS
let num1 = document.getElementById("num1")
console.log(Number(num1.value))
let num2 = document.getElementById("num2")
let som;
let uitkomst = document.getElementById("uitkomst")
function bereken() {
    som = Number(num1.value) + Number(num2.value)
    uitkomst.innerHTML = "De uitkomst is " + som
}

let counter = document.getElementById("counter")
let optellen = document.getElementById("optellen")
let aftrekken = document.getElementById("aftrekken")
let reset = document.getElementById("reset")
let count = 0
optellen.addEventListener("click", function () {
    count++
    counter.innerHTML = count
    console.log(count)
})
reset.addEventListener("click", function () {
    count = 0
    counter.innerHTML = count
    console.log(count)
})
aftrekken.addEventListener("click", function () {
    count--
    counter.innerHTML = count
    console.log(count)
})   