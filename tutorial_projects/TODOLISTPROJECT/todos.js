console.log("THIS IS A UNDER CONSTRUCTION VERSION OF THE TODO APP")

let message = prompt("What would you like to do!?");
var todoList = [];

//The live preview is NOT WORKING when the while loop input condition is ((message !== "quit") || (message !== "q"))
while((message == "new") || (message == "list") || (message == "delete") || (message == "quit") ){
    // (message !== "quit") || (message !== "q")
    if(message == "new"){
        let newItem = prompt("Add a Todo");
        // console.log("Add a Todo");
        todoList.push(newItem);
        console.log(newItem + " added to the list");
    }else if(message == "list"){
        console.log("***************");
        console.log("The length of todoList is: " + todoList.length);
        for(let item = 0; item < todoList.length; item++){
            console.log(`${item} : ${todoList[item]}`);
        }
        console.log("***************");
    }else if(message == "delete"){
        let toBeDeletedIndex = prompt("Enter the index to be removed");
        if(toBeDeletedIndex >= todoList.length){
            console.log("The index " + toBeDeletedIndex + " does not exist")
        }else{
            let deletedItem = todoList[toBeDeletedIndex];
            console.log("The index " + toBeDeletedIndex + " in the todoList is: " + deletedItem)
            todoList.splice(toBeDeletedIndex, 1);
            console.log(deletedItem + " has been deleted");
        }
    }else if(message == "quit"){
        break;
    }
    message = prompt("What would you like to do!? NEW, DELETE, LIST or QUIT");
}

console.log("You have QUIT the app! :(")
console.log("***************");
console.log("The length of todoList is: " + todoList.length);
for(var item = 0; item < todoList.length; item++){
    console.log(item + ": " + todoList[item]);
}
console.log("***************");

function removeItem(todoList, toBeDeletedItem){
    for(var item = 0; item < todoList.length; item++){
        console.log(item + ": " + todoList[item]);
        if(todoList[item] == toBeDeletedItem){
            todoList.pop(item);
            console.log("The item " + item + " has been found and removed");
        }
    }
}