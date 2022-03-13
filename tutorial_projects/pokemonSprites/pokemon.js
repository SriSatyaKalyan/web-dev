// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');

var titleText = document.getElementsByTagName('h1')[0];
titleText.style.textAlign = "center";
titleText.style.color = 'red';

// const newImg = document.createElement('title')
// newImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png";
// container.appendChild(newImg)

const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

let i =1;
while(i <= 898){
    // const newImg = document.createElement('img')
    // newImg.src = `${baseUrl}${i}.png`;
    // container.appendChild(newImg);
    // i++;

    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon')

    const label = document.createElement('span');
    label.innerText = `#${i}`;

    const newImg = document.createElement('img');
    newImg.src = `${baseUrl}${i}.png`;
    
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);

    container.appendChild(pokemon)
    i++;
}