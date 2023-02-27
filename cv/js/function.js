//Comentari
/**
 * 
 */
console.log ("Hola mundo")


document.getElementById("btnoscuro").addEventListener("click", function () {
    document.body.style.backgroundColor = "#ff0000";
})
 function visitantes() {   
let ran
ran = Math.round(Math.random()*1000)
document.writeIn("Usted es el visitante " + ran + " de esta página.")
}
function visitante(){
document.getElementById("visit").addEventListener("click", visitantes);
}
var visitantestotales = document.createElement("p");
var texto = document.createTextNode(visitantes());
visitantestotales.appendChild(texto);
document.getElementById("visit").appendChild(visitantestotales);

/*function agregar() {
*var contenido = visitante();
*document.getElementById("contenido").innerHTML = visitante;}
*/