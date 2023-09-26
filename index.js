const URL = "https://api.chucknorris.io/jokes/random";
const boton = document.getElementById("elBoton");
const elDiv = document.getElementById("container")
const limpiar = document.getElementById("clean")

window.addEventListener("DOMContentLoaded", function(e){
   boton.addEventListener("click", function(){
       fetch(URL)
  .then(response => response.json())
  .then(data => elDiv.innerHTML += data.value + "<br>")
  .catch(error => console.error('Error:', error));
   })

})
limpiar.addEventListener("click", function(){
    elDiv.innerHTML = " "
})