// const itemInput = document.getElementById('itemInput');
// const addButton = document.getElementById('addButton');
// const itemList = document.getElementById('itemList');

// let items = [];

// addButton.addEventListener('click', function() {
// if (itemInput.value !== '') {
//     items.push(itemInput.value);
//     itemInput.value = '';
//     renderList();
// }
// });

// function renderList() {
// itemList.innerHTML = '';
// for (let i = 0; i < items.length; i++) {
//     const li = document.createElement('li');
//     li.textContent = items[i];
//     itemList.appendChild(li);
// }
// }


const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

addButton.addEventListener('click', function() {
  const item = itemInput.value;
  if (item !== '') {
    const li = document.createElement('li');
    li.textContent = item;
    itemList.appendChild(li);
    itemInput.value = '';
  }
});
