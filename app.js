// Define the navigation categories and their items
const navItems = [
    { id: "shawarma", name: "Shawarma" },
    { id: "burgers", name: "Burgers" },
    { id: "pizza", name: "Pizza" },
    { id: "drinks", name: "Drinks" },
   
];

const items = {
    shawarma: [
        { name: "Classic Shawarma", price: "2k", image: "./pngs/shawrma.png" },
        { name: "Spicy Shawarma", price: "2.5k", image: "./pngs/shawrma2.png" },
        { name: "Spicy Shawarma", price: "2.5k", image: "./pngs/shawrma3.png" },
        { name: "Spicy Shawarma", price: "2.5k", image: "./pngs/shawrma4.png" },
        { name: "Spicy Shawarma", price: "2.5k", image: "./pngs/shawrma5.png" },
        { name: "Spicy Shawarma", price: "2.5k", image: "./pngs/shawrma6.png" },
    ],
    burgers: [
        { name: "Cheese Burger", price: "3k", image: "./pngs/burger.png" },
        { name: "Beef Burger", price: "3.5k", image: "./pngs/burger2.png" },
        { name: "Beef Burger", price: "3.5k", image: "./pngs/burger3.png" },
        { name: "Beef Burger", price: "3.5k", image: "./pngs/burger4.png" },
        
    ],
    pizza: [
        { name: "Margherita Pizza", price: "5k", image: "./pngs/pizza.png" },
        { name: "Pepperoni Pizza", price: "5.5k", image: "./pngs/pizza2.png" },
    ],
    drinks: [
        { name: "Margherita drinks", price: "5k", image: "./pngs/drink.png" },
        { name: "Pepperoni drinks", price: "5.5k", image: "./pngs/drink2.png" },
    ],
    // Add more items for other categories
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

        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
    });

    container.appendChild(row);
    section.appendChild(container);
    sectionsContainer.appendChild(section);
}

// Initial call to generate the page content dynamically
createNavigation();
loadItems("shawarma"); // Load Shawarma items by default
