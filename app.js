

var list = document.getElementById("list");

function addTodo(){
    var todoItem = document.getElementById("todo-item")
    
    var li = document.createElement('li')
    var liText = document.createTextNode(todoItem.value)
    li.appendChild(liText)
    
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.appendChild(delText)
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("class","btn-secondary")
    delBtn.setAttribute("onclick","delItem(this)")
    li.appendChild(delBtn)
    
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute("class","btn-secondary")
    editBtn.setAttribute("onclick","editItem(this)")
    li.appendChild(editBtn)


    list.appendChild(li)
    
    todoItem.value = ""

}

function delAll(){
    list.innerHTML = ""
}

function delItem(del){
    del.parentNode.remove()
}

function editItem(edit){
    var pre = edit.parentNode.firstChild.nodeValue
    var editValue= prompt("Enter edit value:",pre)
    edit.parentNode.firstChild.nodeValue = editValue
}