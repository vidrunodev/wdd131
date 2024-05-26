const dropdown = document.getElementById('dropdown');
const products = [
    {
        id: 'fc-1888',
        name: "Flux Capacitor",
        avgrating: 4.5
    },
    {
        id: 'fc-2050',
        name: "Power Laces",
        averagerating: 4.7
    },
    {
        id: 'fs-1987',
        name: "Time Circuits",
        averagerating: 3.5
    },
    {
        id: 'ac-2000',
        name: "Low Voltage Reactor",
        averagerating: 3.9
    },
    {
        id: 'jj-1969',
        name: "Warp Equalizer",
        averagerating: 5.0
    }
];

function populateDropdown() {
    dropdown.innerHTML = '';
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = 'Select a Product';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    dropdown.appendChild(defaultOption);
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.text = product.name;
        dropdown.appendChild(option);
    });
}

populateDropdown();

document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem('reviewCounter')) {
        localStorage.setItem('reviewCounter', 0);
    }
    const counterElement = document.getElementById('reviewCounter');
    localStorage.setItem('reviewCounter', parseInt(localStorage.getItem('reviewCounter')) + 1);
    counterElement.textContent = localStorage.getItem('reviewCounter');
});
