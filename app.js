// Define the navigation categories and their items
const navItems = [
    { id: "shawarma", name: "Shawarma" },
    { id: "burgers", name: "Burgers" },
    { id: "pizza", name: "Pizza" },
    { id: "drinks", name: "Drinks" },
];

const items = {
    shawarma: [
        { name: "Classic Shawarma", price: "2k", image: "./pngs/shawrma.png", description: "A delicious classic shawarma with spices." },
        { name: "Spicy Shawarma", price: "2.5k", image: "./pngs/shawrma2.png", description: "A spicy shawarma for spice lovers." },
        { name: "Chicken Shawarma", price: "2.8k", image: "./pngs/shawrma3.png", description: "Tender chicken shawarma with a smoky taste." },
    ],
    burgers: [
        { name: "Cheese Burger", price: "3k", image: "./pngs/burger.png", description: "A tasty cheese burger with fresh ingredients." },
        { name: "Beef Burger", price: "3.5k", image: "./pngs/burger2.png", description: "Juicy beef patty with your choice of toppings." },
    ],
    pizza: [
        { name: "Margherita Pizza", price: "5k", image: "./pngs/pizza.png", description: "Classic Margherita pizza with mozzarella and basil." },
        { name: "Pepperoni Pizza", price: "5.5k", image: "./pngs/pizza2.png", description: "Pepperoni pizza with a spicy kick." },
    ],
    drinks: [
        { name: "Orange Juice", price: "2k", image: "./pngs/drink.png", description: "Freshly squeezed orange juice." },
        { name: "Lemonade", price: "2.5k", image: "./pngs/drink2.png", description: "A refreshing glass of lemonade." },
    ],
};

// Function to create navigation buttons
function createNavigation() {
    const navContainer = document.getElementById("category-nav");

    navItems.forEach(item => {
        const navButton = document.createElement("a");
        navButton.href = `#${item.id}`;
        navButton.classList.add("btn", "category-btn");
        navButton.textContent = item.name;
        navButton.setAttribute("data-id", item.id);

        // Add click event to change content dynamically
        navButton.addEventListener("click", (event) => {
            event.preventDefault();
            loadItems(item.id);
        });

        navContainer.appendChild(navButton);
    });
}

// Function to generate the content for a section (like Shawarma, Burgers, etc.)
function loadItems(category) {
    const sectionsContainer = document.getElementById("sections");
    sectionsContainer.innerHTML = ""; // Clear previous content

    const section = document.createElement("div");
    section.id = category;
    section.classList.add("section");

    const heading = document.createElement("h2");
    heading.classList.add("beautiful-heading");
    heading.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize the first letter
    section.appendChild(heading);

    const container = document.createElement("div");
    container.classList.add("container", "mt-4");
    const row = document.createElement("div");
    row.classList.add("row", "g-4", "d-flex", "justify-content-around");

    items[category].forEach(item => {
        const col = document.createElement("div");
        col.classList.add("col-12", "col-md-4", "col-lg-3", "d-flex", "justify-content-center");

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = item.image;
        img.classList.add("card-img-top");
        img.alt = item.name;
        card.appendChild(img);

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = item.name;
        cardBody.appendChild(cardTitle);

        const cardPrice = document.createElement("h5");
        cardPrice.classList.add("card-title", "text-light");
        cardPrice.textContent = item.price;
        cardBody.appendChild(cardPrice);

        // Add click event to show item details
        card.addEventListener("click", () => showItemDetails(item));

        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
    });

    container.appendChild(row);
    section.appendChild(container);
    sectionsContainer.appendChild(section);
}

// Function to show item details
function showItemDetails(item) {
    // Show the item details modal
    document.getElementById("item-title").textContent = item.name;
    document.getElementById("item-image").src = item.image;
    document.getElementById("item-description").textContent = item.description;
    document.getElementById("item-price").textContent = item.price;
    
    document.getElementById("item-details").style.display = "block";
}

// Function to hide item details
function hideItemDetails() {
    document.getElementById("item-details").style.display = "none";
}

// Initial call to generate the page content dynamically
createNavigation();
loadItems("shawarma"); // Load Shawarma items by default
