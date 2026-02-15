const form = document.getElementById('addForm')
const itemList = document.getElementById('items')
const filter = document.querySelector('.filter')
const inputField = document.querySelector('.inputText')
// console.dir(document.querySelector('li'));
form.addEventListener('submit', addItem);
itemList.addEventListener('click' || 'Enter', deleteItem);
filter.addEventListener('input', searchItem);
function addItem(e) {
    e.preventDefault()
    const value = inputField.value.trim()
    if(!value) {
        alert("Item cannot be empty")
        return;
    }
    const li = createListItem(value)

    itemList.appendChild(li)
    inputField.value = ""
}

function createListItem(value) {
    const li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = `
    ${value}
    <button class = "delete">X</button>`
    return li;
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
    let items = itemList.querySelectorAll('li');
    items.forEach(item => {
        let itemText = item.firstChild.textContent;
        if(itemText.toLowerCase().indexOf(text) != -1) {
            item.style.display = "flex"
        } else {
            item.style.display = "none"
        }
    });
}