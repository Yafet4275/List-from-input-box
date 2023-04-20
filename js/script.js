const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

let items = [];

addButton.addEventListener('click', function() {
if (itemInput.value !== '') {
    items.push(itemInput.value);
    itemInput.value = '';
    renderList();
}
});

function renderList() {
itemList.innerHTML = '';
for (let i = 0; i < items.length; i++) {
    const li = document.createElement('li');
    li.textContent = items[i];
    itemList.appendChild(li);
}
}
