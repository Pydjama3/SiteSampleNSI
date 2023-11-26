const main_title = "Ingénieur en robotique - ";
const arrow = "=>";

window.addEventListener("load", (event) => {
  
  let description = document.getElementById("description");
  let competences = document.getElementById("competences");
  
  if(document.title === main_title + "Description"){
    description.textContent = arrow;
  } else if(document.title === main_title + "Compétences"){
    competences.textContent = arrow;
  }
})
