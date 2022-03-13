console.log("-------------------------------------------------")
console.log("getElementsByTagName")
const allImages = document.getElementsByTagName('img');

for(let img of allImages){
    // img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg";
    console.log(img.src)
}

console.log("-------------------------------------------------")
console.log("getElementsByClassName")
const squareImages = document.getElementsByClassName('square');
for(let img of squareImages){
    console.log(img.src);
}

console.log("-------------------------------------------------")
console.log("querySelectorAll")
const links = document.querySelectorAll('p a');
for(let link of links){
    console.log(link.href)
}

console.log("-------------------------------------------------")
const allLinks = document.querySelectorAll('a');

// // for (let link of allLinks) {
// //     link.innerText = 'I AM A LINK!!!!'
// // }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

// This is how to select with the attribute of type
// const checkbox = document.querySelector("[type='text/css']")

