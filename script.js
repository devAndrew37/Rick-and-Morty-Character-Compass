const charactersContainer = document.getElementById("characters-container");
const intro = new Audio ("assets/intro.mp3");
const sound0 = new Audio ("assets/heyMorty.mp3");
const sound1 = new Audio ("assets/tinyRick.mp3");
const sound2 = new Audio ("assets/mrMeeseeks.mp3");
const sound3 = new Audio ("assets/phrase.mp3");
const sound4 = new Audio ("assets/pickleRick.mp3");
const sound5 = new Audio ("assets/shutup.mp3");
const sounds = [sound0, sound1, sound2, sound3, sound4, sound5];

fetch("https://rickandmortyapi.com/api/character").then(response => response.json()).then(data => {
  data.results.forEach(character => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
  <img src="${character.image}" alt="${character.name}" class="character-image">
  <p class="character-detail"><span class="attribute">Name:</span> ${character.name}</p>
  <p class="character-detail"><span class="attribute">Gender:</span> ${character.gender}</p>
  <p class="character-detail"><span class="attribute">Status:</span> ${character.status}</p>
  <p class="character-detail"><span class="attribute">Species:</span> ${character.species}</p>
`;
  charactersContainer.appendChild(card);
});
 });
 
 function playIntro() {
	 intro.play();
 }
 
 function playRandomSound() {
	 let randomSound = Math.floor(Math.random()*6);
	 for (let i=0; i<6; i++){
		 if(randomSound == i){
			 sounds[i].play();
	 } 
  }
 }