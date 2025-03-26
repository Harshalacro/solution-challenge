// Function to add item to local storage
function addItemToLocalStorage(item) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
}

// Function to display items on the Buy Goods page
function displayItems() {
    const itemList = document.getElementById('item-list');
    const items = JSON.parse(localStorage.getItem('items')) || [];

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = ${item.name} - $${item.price};
        itemList.appendChild(li);
    });
}

// Event listener for the Sell Goods form
document.getElementById('sell-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const itemName = document.getElementById('item-name').value;
    const itemPrice = document.getElementById('item-price').value