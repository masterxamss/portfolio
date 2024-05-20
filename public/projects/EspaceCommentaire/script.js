/*
     * EXERCICE POUR DYNAMISER UN ESPACE COMMENTAIRE

     * Vérifier que tous les champs ne sont pas vides, si l’un est vide : afficher le message d’erreur déjà présent dans le HTML (caché par défaut);
     * Ajouter le contenu de ce formulaire dans un nouveau commentaire au sein de la liste déjà présente (en reprenant les balises HTML d’un des commentaires);
     * Supprimer le contenu des champs du formulaire une fois le nouveau commentaire affiché dans la liste;
     * La page ne peut pas se recharger;
            
     * Numéro de élève : F471277A
     * Nom Prénom : Machado Tiago
     * Date : 02/05/2024  
*/


const bg = document.querySelector("form");

bg.addEventListener("submit",(e)=>{
  e.preventDefault();
  addMsg();
})


function addMsg() {
  // GET FIRST NAME AND LAST NAME
  const getFirstName = document.getElementById("first-name").value;
  const getLastName = document.getElementById("last-name").value;

  // SELECT DIV FATHER
  const commentList = document.querySelector("#comment-list");

  // CREATE ELEMENTS
  const divChild1 = createDivElement("flex space-x-4 text-sm text-gray-500");
  const divChild2 = createDivElement("flex-1 py-10 border-t border-gray-200");
  const divChild3 = createDivElement("prose prose-sm mt-4 max-w-none text-gray-500");
  const setName = createElement("h3", "font-medium text-gray-900");
  const setMsg = createElement("p");

  if (!getFirstName || !getLastName || !document.getElementById("message").value) {
    // MESSAGE ERROR
    document.getElementById("error-message").style.display = "block";
    return false;
  }
  else{
    // CONCATE NAME, GET MESSAGE AND REMOVE WHITE SPACES
    setName.textContent = `${getFirstName.trim()} ${getLastName.trim()}`;
    setMsg.textContent = document.getElementById("message").value.trim();
    
    // SET ELEMENT HIERARCHY
    commentList.append(divChild1);
    divChild1.append(divChild2);
    divChild2.append(setName, divChild3);
    divChild3.append(setMsg);
    
    document.querySelector("form").reset();
    document.getElementById("error-message").style.display = "none";
  }
}

// FUNCTION TO CREATE DIV ELEMENT
function createDivElement(className) {
  const div = document.createElement("div");
  div.setAttribute("class", className);
  return div;
}

// FUNCTION TO CREATE ELEMENT WITH ATTRIBUTES
function createElement(tag, className) {
  const element = document.createElement(tag);
  if (className) {
    element.setAttribute("class", className);
  }
  return element;
}
