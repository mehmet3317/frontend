let itemLijst = document.getElementById("myDIV")
 
console.log(itemLijst.children)
 function tonen(e){
    console.log(e.firstChild.nextSibling.innerHTML)
 for(let x = 0; x<itemLijst.children.length;x++){
console.log(itemLijst.children[x].lastChild.previousSibling.innerHTML)
if(itemLijst.children[x].firstChild.nextSibling.innerHTML == e.firstChild.nextSibling.innerHTML){
    itemLijst.children[x].lastChild.previousSibling.style.display = "block" && "inline-block"
}else{
    itemLijst.children[x].lastChild.previousSibling.style.display = "none"
}
 }
 }


