let id = 0;
function addTask(){
    id++;

        let task = document.getElementById('value').value;
        let node = document.createElement("LI");
        node.id = id.toString();
        let textNode = document.createTextNode(task);
        node.appendChild(textNode);

        let deleteButton = document.createElement('input')
        deleteButton.setAttribute('type', 'button');
        deleteButton.setAttribute('value', 'X');
        deleteButton.id = id.toString();

        deleteButton.className = "deleteButton";

        document.getElementById("demo").appendChild(node).appendChild(deleteButton);
        document.getElementById('value').value = '';
        deleteButton.onclick = deleteTask;
}
function deleteTask (){
    document.getElementById(this.id).remove();
}


