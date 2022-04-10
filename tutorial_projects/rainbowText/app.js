const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
let i =0;
const text = document.querySelectorAll("span");
while(i < colors.length){
    text[i].style.color = colors[i];
    i++;
}