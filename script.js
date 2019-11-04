const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


//need a create a function when checkbox is clicked
//this function should be async essentially on click unchecked count decreases
function checkbox_checked()
{
  console.log("Hello")
  console.log(this)
  if (this.checked == true)
  {
    uncheckedCountSpan.innerText = String(parseInt(uncheckedCountSpan.innerText)-1)
  }
  else
  {
     uncheckedCountSpan.innerText = String(parseInt(uncheckedCountSpan.innerText)+1)
  }

}

function newTodo() {
  //alert('New TODO button clicked!')

  //when a Todo button is clicked ask for what the name of the todo item
  //then when I get the item name, create the item
  //add it to the list
  //update the count of items
  //update the unchecked count

  var todo_text = prompt('Please enter the name of the todo:')
  console.log(todo_text) //works!
  if(todo_text) //javascript syntax that takes care of null checks
  {
    var list_item = document.createElement("li") //create list item
    list_item.className += classNames['TODO_ITEM'] //add class will add first class later

    var todo_text_item = document.createElement("p") // create new text for the todo.
    todo_text_item.innerText = todo_text
    todo_text_item.className += classNames['TODO_TEXT'] // make text item
    list_item.appendChild(todo_text_item)

    var todo_checkbox = document.createElement("input")
    todo_checkbox.className += classNames['TODO_CHECKBOX']
    todo_checkbox.addEventListener("click", checkbox_checked);
    //todo_checkbox.addEventListener("click", checkbox_checked);
    //todo_checkbox.onclick = function(e) {}
    todo_checkbox.type = 'checkbox';
    list_item.appendChild(todo_checkbox);

    list.appendChild(list_item)

    itemCountSpan.innerText = String(parseInt(itemCountSpan.innerText)+1)
    uncheckedCountSpan.innerText = String(parseInt(uncheckedCountSpan.innerText)+1)
    return
  }
  else {
    return //error in todo text don't add element
  }
}
