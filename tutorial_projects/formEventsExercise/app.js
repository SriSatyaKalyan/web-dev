const newForm = document.querySelector('#form');

const product = document.querySelector("#product");
const number = document.querySelector("#qty");

const list = document.querySelector("#list");

form.addEventListener("submit", function (e){
    e.preventDefault();

    const productName = product.value;
    const numberofProducts = number.value;

    const newLi = document.createElement("LI");
    newLi.innerText = `${numberofProducts} ${productName}`;
    list.append(newLi);

    document.getElementById("form").reset();
})