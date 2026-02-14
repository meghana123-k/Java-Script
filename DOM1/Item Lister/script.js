let form = document.getElementById('addForm')
let itemList = document.getElementById('items')
let filter = document.querySelector('.filter')
// console.dir(document.querySelector('li'));
form.addEventListener('submit', addItem);
itemList.addEventListener('click' || 'Enter', deleteItem);
filter.addEventListener('keyup', searchItem);
function addItem(e) {
    e.preventDefault()
    let inputText = document.querySelector('.inputText').value
    let newList = document.createElement('li');
    let newButton = document.createElement('button')
    newList.className = 'list-group-item';
    newList.appendChild(document.createTextNode(inputText));
    newButton.className = 'delete'
    newButton.appendChild(document.createTextNode('X'));
    newList.appendChild(newButton)
    itemList.appendChild(newList)
    document.querySelector(".inputText").value = "";
}

function deleteItem(e) {

    if(e.target.classList.contains('delete')) {
        if(confirm("Are you sure?")) {
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}
function searchItem(e) {
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    Array.from((items)).forEach(item => {
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "flex"
        } else {
            item.style.display = "none"
        }
    });
}