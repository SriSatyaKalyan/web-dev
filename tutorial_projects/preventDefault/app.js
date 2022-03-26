const form = document.querySelector("#shelterForm");

const input = document.querySelector("#catName");

const list = document.querySelector("#cats");

form.addEventListener("submit", function(e){
    e.preventDefault();

    console.log("Submitted the form!");
    console.log(input.value);

    const catName = input.value;
    const newLi = document.createElement("LI");

    newLi.innerText = catName;
    console.log(newLi);

    list.append(newLi);
})