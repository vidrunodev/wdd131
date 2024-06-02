document.getElementById("currentYear").textContent = new Date().getFullYear();

const products = [
    {
        productName: "Smartphone X",
        category: "smartphones",
        description: "The latest smartphone with cutting-edge features",
        imageUrl: "images/smartphone-x.jpg",
        alt: "Smartphone X",
    },
    {
        productName: "Laptop Pro",
        category: "laptops",
        description: "A powerful laptop for all your computing needs",
        imageUrl: "images/laptop-pro.jpg",
        alt: "Laptop Pro",
    },
    {
        productName: "Smart Home Hub",
        category: "smart-home",
        description: "Central hub for all your smart home devices",
        imageUrl: "images/smart-home-hub.jpg",
        alt: "Smart Home Hub",
    },
    {
        productName: "Smartwatch",
        category: "smartphones",
        description: "Stay connected with this sleek smartwatch",
        imageUrl: "images/smartwatch.jpg",
        alt: "Smartwatch",
    },
    {
        productName: "Gaming Laptop",
        category: "laptops",
        description: "High-performance laptop for gaming enthusiasts",
        imageUrl: "images/gaming-laptop.jpg",
        alt: "Gaming Laptop",
    },
    {
        productName: "Smart Light Bulb",
        category: "smart-home",
        description: "Energy-efficient smart light bulb with app control",
        imageUrl: "images/smart-light-bulb.jpg",
        alt: "Smart Light Bulb",
    }
];

function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.src = product.imageUrl;
    img.alt = product.alt;
    img.loading = "lazy";

    const name = document.createElement("h3");
    name.textContent = product.productName;

    const description = document.createElement("p");
    description.textContent = product.description;

    productCard.appendChild(img);
    productCard.appendChild(name);
    productCard.appendChild(description);

    return productCard;
}

function displayProducts(filteredProducts) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";
    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

displayProducts(products); // Display all products initially

function filterProducts(category) {
    const filteredProducts = products.filter(product => product.category === category || category === "featured");
    displayProducts(filteredProducts);
}

document.getElementById("featured").addEventListener("click", () => filterProducts("featured"));
document.getElementById("smartphones").addEventListener("click", () => filterProducts("smartphones"));
document.getElementById("laptops").addEventListener("click", () => filterProducts("laptops"));
document.getElementById("smart-home").addEventListener("click", () => filterProducts("smart-home"));
