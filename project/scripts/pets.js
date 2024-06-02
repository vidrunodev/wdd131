document.getElementById("currentYear").textContent = new Date().getFullYear();

const products = [
    {
        productName: "Dog Food",
        category: "food",
        description: "Nutritious dog food for a healthy diet",
        imageUrl: "images/dog-food.jpg",
        alt: "Dog Food",
    },
    {
        productName: "Cat Food",
        category: "food",
        description: "Premium cat food for a balanced diet",
        imageUrl: "images/cat-food.jpg",
        alt: "Cat Food",
    },
    {
        productName: "Chew Toy",
        category: "toys",
        description: "Durable chew toy for dogs",
        imageUrl: "images/chew-toy.jpg",
        alt: "Chew Toy",
    },
    {
        productName: "Cat Scratcher",
        category: "toys",
        description: "Interactive scratcher for cats",
        imageUrl: "images/cat-scratcher.jpg",
        alt: "Cat Scratcher",
    },
    {
        productName: "Dog Bed",
        category: "bedding",
        description: "Comfortable bed for dogs",
        imageUrl: "images/dog-bed.jpg",
        alt: "Dog Bed",
    },
    {
        productName: "Cat Bed",
        category: "bedding",
        description: "Cozy bed for cats",
        imageUrl: "images/cat-bed.jpg",
        alt: "Cat Bed",
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
document.getElementById("food").addEventListener("click", () => filterProducts("food"));
document.getElementById("toys").addEventListener("click", () => filterProducts("toys"));
document.getElementById("bedding").addEventListener("click", () => filterProducts("bedding"));
