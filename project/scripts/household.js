document.getElementById("currentYear").textContent = new Date().getFullYear();

const products = [
    {
        productName: "Blender",
        category: "kitchen",
        description: "High-speed blender for smoothies and soups",
        imageUrl: "images/blender.jpg",
        alt: "Blender",
    },
    {
        productName: "Toaster",
        category: "kitchen",
        description: "4-slice toaster with browning control",
        imageUrl: "images/toaster.jpg",
        alt: "Toaster",
    },
    {
        productName: "Microwave",
        category: "kitchen",
        description: "Compact microwave with multiple settings",
        imageUrl: "images/microwave.jpg",
        alt: "Microwave",
    },
    {
        productName: "Sofa",
        category: "decor",
        description: "Comfortable 3-seater sofa",
        imageUrl: "images/sofa.jpg",
        alt: "Sofa",
    },
    {
        productName: "Coffee Table",
        category: "decor",
        description: "Modern coffee table with storage",
        imageUrl: "images/coffee-table.jpg",
        alt: "Coffee Table",
    },
    {
        productName: "Lamp",
        category: "decor",
        description: "Stylish floor lamp",
        imageUrl: "images/lamp.jpg",
        alt: "Lamp",
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
document.getElementById("kitchen").addEventListener("click", () => filterProducts("kitchen"));
document.getElementById("decor").addEventListener("click", () => filterProducts("decor"));
