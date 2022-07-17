// queryselectors//
let todoInputText = document.querySelector("#todoTextInput");
let addButton = document.querySelector("#addButton");
let removeOneButton = document.querySelector("#removeOneButton");
let removeAllButton = document.querySelector("#removeAllButton");
let itemsDisplay = document.querySelector("ul");

// event listeners//
//Add button
addButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (todoInputText.value === "") {
    alert("Please enter a todo item!");
  } else {
    let newItem = document.createElement("li");
    newItem.setAttribute("class", "newListItem");
    newItem.innerText = `${todoInputText.value}:    `;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("class", "newItemButtons redDelete");
    newItem.appendChild(deleteButton);
    itemsDisplay.appendChild(newItem); //adds delete button to each new li
    deleteButton.addEventListener("click", function () {
      newItem.remove();
    });
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
   
    editButton.setAttribute("class", "newItemButtons yellowEdit");
    newItem.appendChild(editButton); //adds edit button to each new li

    let editTextInput = document.createElement("input");
    editTextInput.setAttribute("class", "editTextHere");
    editTextInput.setAttribute("placeholder", "Enter edit here.")
    editButton.addEventListener("click", function () {
      newItem.appendChild(editTextInput); //adds edit text input area to each new li when edit button is pressed
      //edit submit button
      let editTextSubmit = document.createElement("button");
      editTextSubmit.setAttribute("class", "newItemButtons editedTextSubmit");
      editTextSubmit.innerText = "Submit";
      newItem.appendChild(editTextSubmit);

      editTextSubmit.addEventListener("click", function () {
        if (editTextInput.value === "") {
          alert("Please enter edited todo list item!");
        } else {
          newItem.innerText = editTextInput.value; //replaces existing text with new edited text when submit button is clicked
          newItem.appendChild(deleteButton);
          newItem.appendChild(editButton);
          editTextInput.value = ""
        }
      });
    });
  }
  todoInputText.value = ""
});

//remove all line items button
removeAllButton.addEventListener("click", function (event) {
  event.preventDefault();
  let updatedList = document.querySelectorAll("#itemsDisplay li");
  for (let i = 0; i < updatedList.length; i++) {
    updatedList[i].remove();
  }
});


