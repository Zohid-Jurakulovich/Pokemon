var elList = document.querySelector(".list");


for(var pokemon of pokemons ){
  
  
  
  
  var newItem = document.createElement("li");
  var newHeading = document.createElement("h3");
  var newImg = document.createElement("img");
  var newSpan = document.createElement("span")
  var newHeading = document.createElement("h3");
  var newText = document.createElement("p");
  var newTextHeight = document.createElement("p");
  var newTextWeight = document.createElement("p");
  var newSubtext = document.createElement("p");
  var newSubList = document.createElement("ul");
  
  for(var weakness of pokemon.weaknesses){
    var newSubitem = document.createElement("li");
    newSubitem.textContent = weakness;
    
    
    newSubList.appendChild(newSubitem);
    
  }
  
  
  newHeading.textContent = pokemon.name;
  newSpan.textContent = pokemon.num;
  newText.textContent = pokemon.candy;
  newTextHeight.textContent = "Height: " + pokemon.height;
  newTextWeight.textContent = "Weight: " + pokemon.weight;
  newSubtext.textContent = "Weaknesses:";
  
  newItem.setAttribute("class", "list__item")
  newImg.setAttribute("src", pokemon.img);
  newImg.setAttribute("class", "list__img");
  newSpan.setAttribute("class", "list__index-text");
  newHeading.setAttribute("class", "list__title");
  newText.setAttribute("class", "list__text");
  newTextHeight.setAttribute("class", "list__text-height");
  newTextWeight.setAttribute("class", "list__text-weight");
  newSubList.setAttribute("class", "list__sublist");
  newSubtext.setAttribute("class", "list__subtext");
  
  
  
  
  
  newItem.appendChild(newImg);
  newItem.appendChild(newSpan);
  newItem.appendChild(newHeading);
  newItem.appendChild(newText);
  newItem.appendChild(newTextHeight);
  newItem.appendChild(newTextWeight);
  newItem.appendChild(newSubtext);
  newItem.appendChild(newSubList);
  elList.appendChild(newItem); // yangi elementni bir biriga ulash
}

