const menuItems = [
   // BAKED GOODS
   {
      category: "baked",
      group: "Croissants",
      name: "Plain Croissant",
      price: 3.00,
      image: "images/plain-croissants.jpg",
      alt: "Plain flaky croissants",
      description: "Buttery, golden croissants with light flaky layers."
   },
   {
      category: "baked",
      group: "Croissants",
      name: "Blueberry Croissant",
      price: 3.50,
      image: "images/blueberry-croissants.jpg",
      alt: "Blueberry croissants",
      description: "Flaky croissants filled or topped with sweet blueberry flavor."
   },
   {
      category: "baked",
      group: "Croissants",
      name: "Chocolate Croissant",
      price: 3.75,
      image: "images/chocolate-croissant.jpg",
      alt: "Chocolate croissant",
      description: "A buttery croissant with rich chocolate filling."
   },
   {
      category: "baked",
      group: "Croissants",
      name: "Almond Croissant",
      price: 3.75,
      image: "images/almond-croissant.jpg",
      alt: "Almond croissant",
      description: "A flaky croissant topped with almonds and sweet almond filling."
   },

   {
      category: "baked",
      group: "Turnovers",
      name: "Apple Turnover",
      price: 4.00,
      image: "images/apple-turnovers.jpg",
      alt: "Apple turnover pastry",
      description: "A flaky pastry filled with cinnamon-spiced apple filling."
   },
   {
      category: "baked",
      group: "Turnovers",
      name: "Cherry Turnover",
      price: 4.00,
      image: "images/cherry-turnovers.jpg",
      alt: "Cherry turnover pastry",
      description: "A golden pastry filled with sweet cherry filling."
   },
   {
      category: "baked",
      group: "Turnovers",
      name: "Berry Turnover",
      price: 4.25,
      image: "images/berry-turnovers.jpg",
      alt: "Berry turnover pastry",
      description: "A flaky turnover filled with mixed berry filling."
   },
   {
      category: "baked",
      group: "Turnovers",
      name: "Lime Turnover",
      price: 4.00,
      image: "images/lime-turnovers.jpg",
      alt: "Lime turnover pastry",
      description: "A bright citrus pastry filled with sweet lime flavor."
   },

   {
      category: "baked",
      group: "Biscuits",
      name: "Ginger Biscuit",
      price: 2.50,
      image: "images/ginger-biscuits.jpg",
      alt: "Ginger biscuits",
      description: "Warm biscuits with a lightly spiced ginger flavor."
   },
   {
      category: "baked",
      group: "Biscuits",
      name: "Chocolate Biscuit",
      price: 2.75,
      image: "images/chocolate-biscuits.jpg",
      alt: "Chocolate biscuits",
      description: "Soft biscuits with a rich chocolate flavor."
   },
   {
      category: "baked",
      group: "Biscuits",
      name: "Sugar Biscuit",
      price: 2.50,
      image: "images/sugar-biscuits.jpg",
      alt: "Sugar biscuits",
      description: "Sweet biscuits with a simple buttery sugar flavor."
   },
   {
      category: "baked",
      group: "Biscuits",
      name: "Pomegranate Biscuit",
      price: 2.75,
      image: "images/pomergranate-biscuits.jpg",
      alt: "Pomegranate biscuits",
      description: "Sweet biscuits with a fruity pomegranate flavor."
   },

   {
      category: "baked",
      group: "Bread",
      name: "White Bread",
      price: 5.00,
      image: "images/white-bread.jpg",
      alt: "White bread loaf",
      description: "A soft classic bread loaf perfect for sandwiches or toast."
   },
   {
      category: "baked",
      group: "Bread",
      name: "Wheat Bread",
      price: 5.50,
      image: "images/wheat-bread.jpg",
      alt: "Wheat bread loaf",
      description: "A hearty wheat bread loaf with a wholesome flavor."
   },
   {
      category: "baked",
      group: "Bread",
      name: "Walnut Bread",
      price: 6.00,
      image: "images/walnut-bread.jpg",
      alt: "Walnut bread loaf",
      description: "Fresh bread baked with crunchy walnuts."
   },
   {
      category: "baked",
      group: "Bread",
      name: "Rye Whole-Grain Bread",
      price: 6.00,
      image: "images/rye-whole-grain-bread.jpg",
      alt: "Rye whole grain bread",
      description: "A rich, hearty bread made with rye and whole grains."
   },

   {
      category: "baked",
      group: "Muffins",
      name: "Blueberry Muffin",
      price: 2.50,
      image: "images/blueberry-muffins.jpg",
      alt: "Blueberry muffins",
      description: "Soft muffins filled with sweet blueberries."
   },
   {
      category: "baked",
      group: "Muffins",
      name: "Banana Muffin",
      price: 2.50,
      image: "images/banana-muffins.jpg",
      alt: "Banana muffins",
      description: "Moist banana muffins with a soft, sweet crumb."
   },
   {
      category: "baked",
      group: "Muffins",
      name: "Lemon Muffin",
      price: 2.75,
      image: "images/lemon-muffins.jpg",
      alt: "Lemon muffins",
      description: "Bright lemon muffins with a soft citrus flavor."
   },
   {
      category: "baked",
      group: "Muffins",
      name: "Pistachio Muffin",
      price: 3.00,
      image: "images/pistachio-muffins.jpg",
      alt: "Pistachio muffins",
      description: "Nutty pistachio muffins with a lightly sweet flavor."
   },

   // SPECIALTY DESSERTS
   {
      category: "desserts",
      group: "Cakes",
      name: "Confetti Cake",
      price: 28.00,
      image: "images/confetti-cake.jpg",
      alt: "Confetti celebration cake",
      description: "A colorful cake filled with fun sprinkles and sweet frosting."
   },
   {
      category: "desserts",
      group: "Cakes",
      name: "Red Velvet Cake",
      price: 32.00,
      image: "images/red-velvet-cake.jpg",
      alt: "Red velvet cake",
      description: "A classic red velvet cake with smooth cream cheese-style frosting."
   },
   {
      category: "desserts",
      group: "Cakes",
      name: "Lemon Cake",
      price: 30.00,
      image: "images/lemon-cake.jpg",
      alt: "Lemon cake",
      description: "A soft lemon cake with bright citrus flavor."
   },
   {
      category: "desserts",
      group: "Cakes",
      name: "Carrot Cake",
      price: 32.00,
      image: "images/carrot-cake.jpg",
      alt: "Carrot cake",
      description: "A spiced carrot cake with a moist texture and rich frosting."
   },

   {
      category: "desserts",
      group: "Cupcakes",
      name: "Vanilla Cupcakes",
      price: 3.00,
      image: "images/vanilla-cupcakes.jpg",
      alt: "Vanilla cupcakes",
      description: "Soft vanilla cupcakes topped with creamy frosting."
   },
   {
      category: "desserts",
      group: "Cupcakes",
      name: "Oreo Cupcakes",
      price: 3.50,
      image: "images/oreo-cupcakes.jpg",
      alt: "Oreo cupcakes",
      description: "Chocolate cupcakes topped with cookies-and-cream frosting."
   },
   {
      category: "desserts",
      group: "Cupcakes",
      name: "Funfetti Cupcakes",
      price: 3.25,
      image: "images/funfetti-cupcakes.jpg",
      alt: "Funfetti cupcakes",
      description: "Colorful cupcakes with sprinkles and sweet frosting."
   },
   {
      category: "desserts",
      group: "Cupcakes",
      name: "Red Velvet Cupcakes",
      price: 3.50,
      image: "images/red-velvet-cupcakes.jpg",
      alt: "Red velvet cupcakes",
      description: "Classic red velvet cupcakes topped with creamy frosting."
   },

   {
      category: "desserts",
      group: "Cookies",
      name: "Ginger Snaps",
      price: 2.00,
      image: "images/ginger-snaps.jpg",
      alt: "Ginger snap cookies",
      description: "Crisp cookies with warm ginger spice."
   },
   {
      category: "desserts",
      group: "Cookies",
      name: "Sugar Cookies",
      price: 2.00,
      image: "images/sugar-cookies.jpg",
      alt: "Sugar cookies",
      description: "Buttery sugar cookies with a soft, sweet bite."
   },
   {
      category: "desserts",
      group: "Cookies",
      name: "Birthday Cake Cookies",
      price: 2.50,
      image: "images/birthday-cake-cookies.jpg",
      alt: "Birthday cake cookies",
      description: "Sweet cookies inspired by birthday cake flavors and sprinkles."
   },
   {
      category: "desserts",
      group: "Cookies",
      name: "Chocolate Chip Pecan Cookies",
      price: 2.75,
      image: "images/chocolate-chip-and-pecan-cookies.jpg",
      alt: "Chocolate chip pecan cookies",
      description: "Chewy cookies with chocolate chips and crunchy pecans."
   },

   {
      category: "desserts",
      group: "Tarts",
      name: "Peach Tart",
      price: 4.50,
      image: "images/peach-tart.jpg",
      alt: "Peach tart",
      description: "A delicate tart topped with sweet peaches."
   },
   {
      category: "desserts",
      group: "Tarts",
      name: "Apricot Tart",
      price: 4.50,
      image: "images/apricot-tart.jpg",
      alt: "Apricot tart",
      description: "A fruit tart featuring bright apricot flavor."
   },
   {
      category: "desserts",
      group: "Tarts",
      name: "Blueberry Tart",
      price: 4.50,
      image: "images/blueberry-tart.jpg",
      alt: "Blueberry tart",
      description: "A sweet tart filled with blueberries."
   },
   {
      category: "desserts",
      group: "Tarts",
      name: "Strawberry Tart",
      price: 4.50,
      image: "images/strawberry-tart.jpg",
      alt: "Strawberry tart",
      description: "A fresh tart topped with strawberries."
   },

   {
      category: "desserts",
      group: "Pies",
      name: "Apple Pie",
      price: 18.00,
      image: "images/apple-pie.jpg",
      alt: "Apple pie",
      description: "A classic pie filled with cinnamon apples."
   },
   {
      category: "desserts",
      group: "Pies",
      name: "Cherry Pie",
      price: 18.00,
      image: "images/cherry-pie.jpg",
      alt: "Cherry pie",
      description: "A sweet cherry pie baked in a flaky crust."
   },
   {
      category: "desserts",
      group: "Pies",
      name: "Pumpkin Pie",
      price: 18.00,
      image: "images/pumpkin-pie.jpg",
      alt: "Pumpkin pie",
      description: "A smooth pumpkin pie with warm spices."
   },
   {
      category: "desserts",
      group: "Pies",
      name: "Pecan Pie",
      price: 20.00,
      image: "images/pecan-pie.jpg",
      alt: "Pecan pie",
      description: "A rich pie filled with sweet pecan filling."
   },

   {
      category: "desserts",
      group: "Cheesecakes",
      name: "Raspberry Blueberry Cheesecake",
      price: 6.00,
      image: "images/raspberry-and-blueberry-cheese-cake.jpg",
      alt: "Raspberry and blueberry cheesecake",
      description: "Creamy cheesecake topped with raspberry and blueberry flavors."
   },
   {
      category: "desserts",
      group: "Cheesecakes",
      name: "Strawberry Cheesecake",
      price: 6.00,
      image: "images/strawberry-cheese-cake.jpg",
      alt: "Strawberry cheesecake",
      description: "Creamy cheesecake topped with strawberry flavor."
   },
   {
      category: "desserts",
      group: "Cheesecakes",
      name: "Festive Cheesecake",
      price: 6.50,
      image: "images/festive-cheese-cake.jpg",
      alt: "Festive cheesecake",
      description: "A decorative cheesecake made for celebrations."
   },
   {
      category: "desserts",
      group: "Cheesecakes",
      name: "Fig Pecan Cheesecake",
      price: 6.50,
      image: "images/fig-and-pecan-cheese-cake.jpg",
      alt: "Fig and pecan cheesecake",
      description: "Creamy cheesecake with fig and pecan flavors."
   },

   {
      category: "desserts",
      group: "Mille-Feuilles",
      name: "Mixed Berry Mille-Feuille",
      price: 5.75,
      image: "images/mixed-berry-mille-feuille.jpg",
      alt: "Mixed berry mille feuille",
      description: "Layered pastry with cream and mixed berries."
   },
   {
      category: "desserts",
      group: "Mille-Feuilles",
      name: "Matcha Mille-Feuille",
      price: 5.75,
      image: "images/matcha-mille-feuille.jpg",
      alt: "Matcha mille feuille",
      description: "Layered pastry with matcha cream flavor."
   },
   {
      category: "desserts",
      group: "Mille-Feuilles",
      name: "Raspberry Mille-Feuille",
      price: 5.75,
      image: "images/raspberry-mille-feuille.jpg",
      alt: "Raspberry mille feuille",
      description: "Crisp pastry layers filled with raspberry cream."
   },
   {
      category: "desserts",
      group: "Mille-Feuilles",
      name: "Strawberry Mille-Feuille",
      price: 5.75,
      image: "images/strawberry-mille-feuilles.jpg",
      alt: "Strawberry mille feuille",
      description: "Layered pastry with strawberry cream."
   },

   {
      category: "desserts",
      group: "Cannoli",
      name: "Mixed Nut Cannoli",
      price: 4.25,
      image: "images/mixed-nuts-cannoli.jpg",
      alt: "Mixed nut cannoli",
      description: "Crisp cannoli shells filled with sweet cream and mixed nuts."
   },
   {
      category: "desserts",
      group: "Cannoli",
      name: "Pistachio Cannoli",
      price: 4.25,
      image: "images/pistachio-cannoli.jpg",
      alt: "Pistachio cannoli",
      description: "A crisp cannoli filled with pistachio cream."
   },
   {
      category: "desserts",
      group: "Cannoli",
      name: "Chocolate Chip Cannoli",
      price: 4.25,
      image: "images/chocolate-chip-cannoli.jpg",
      alt: "Chocolate chip cannoli",
      description: "Cannoli filled with sweet cream and chocolate chips."
   },
   {
      category: "desserts",
      group: "Cannoli",
      name: "Ricotta Cannoli",
      price: 4.25,
      image: "images/ricotta-cannoli.jpg",
      alt: "Ricotta cannoli",
      description: "Classic cannoli filled with sweet ricotta cream."
   },

   {
      category: "desserts",
      group: "Éclairs",
      name: "Blueberry Chocolate Éclair",
      price: 4.75,
      image: "images/blueberry-and-chocolate-eclairs.jpg",
      alt: "Blueberry and chocolate eclairs",
      description: "Éclairs filled with cream and topped with blueberry and chocolate flavors."
   },
   {
      category: "desserts",
      group: "Éclairs",
      name: "Caramel Éclair",
      price: 4.75,
      image: "images/caramel-eclairs.jpg",
      alt: "Caramel eclairs",
      description: "Cream-filled éclairs topped with caramel flavor."
   },
   {
      category: "desserts",
      group: "Éclairs",
      name: "Chocolate Pecan Éclair",
      price: 5.00,
      image: "images/chocolate-pecan-eclairs.jpg",
      alt: "Chocolate pecan eclairs",
      description: "Éclairs topped with chocolate and pecans."
   },
   {
      category: "desserts",
      group: "Éclairs",
      name: "Hazelnut Caramel Éclair",
      price: 5.00,
      image: "images/hazelnut-and-caramel-popcorn-eclairs.jpg",
      alt: "Hazelnut and caramel popcorn eclairs",
      description: "Éclairs with hazelnut, caramel, and popcorn-inspired toppings."
   },

   {
      category: "desserts",
      group: "Donuts",
      name: "Strawberry Donut",
      price: 2.50,
      image: "images/strawberry-donuts.jpg",
      alt: "Strawberry donuts",
      description: "Soft donuts topped with strawberry glaze."
   },
   {
      category: "desserts",
      group: "Donuts",
      name: "Chocolate Donut",
      price: 2.50,
      image: "images/chocolate-donuts.jpg",
      alt: "Chocolate donuts",
      description: "Sweet donuts topped with chocolate glaze."
   },
   {
      category: "desserts",
      group: "Donuts",
      name: "Glazed Donut",
      price: 2.25,
      image: "images/glazed-donuts.jpg",
      alt: "Glazed donuts",
      description: "Classic donuts coated in a sweet glaze."
   },
   {
      category: "desserts",
      group: "Donuts",
      name: "Sprinkle Donut",
      price: 2.50,
      image: "images/sprinkle-donuts.jpg",
      alt: "Sprinkle donuts",
      description: "Glazed donuts topped with colorful sprinkles."
   },

   {
      category: "desserts",
      group: "Profiteroles",
      name: "Lemon Profiteroles",
      price: 4.75,
      image: "images/lemon-profiteroles.jpg",
      alt: "Lemon profiteroles",
      description: "Light pastry puffs filled with lemon cream."
   },
   {
      category: "desserts",
      group: "Profiteroles",
      name: "Hazelnut Profiteroles",
      price: 4.75,
      image: "images/hazelnut-profiteroles.jpg",
      alt: "Hazelnut profiteroles",
      description: "Pastry puffs filled with hazelnut cream."
   },
   {
      category: "desserts",
      group: "Profiteroles",
      name: "Chocolate Profiteroles",
      price: 4.75,
      image: "images/chocolate-profiteroles.jpg",
      alt: "Chocolate profiteroles",
      description: "Cream-filled pastry puffs topped with chocolate."
   },
   {
      category: "desserts",
      group: "Profiteroles",
      name: "Pistachio Profiteroles",
      price: 4.75,
      image: "images/pistachio-profiteroles.jpg",
      alt: "Pistachio profiteroles",
      description: "Pastry puffs filled with pistachio cream."
   },

   // DRINKS
   {
      category: "drinks",
      group: "Drinks",
      name: "House Coffee",
      price: 2.50,
      image: "images/house-coffee.jpg",
      alt: "House coffee",
      description: "A warm cup of freshly brewed house coffee."
   },
   {
      category: "drinks",
      group: "Drinks",
      name: "Tea",
      price: 2.25,
      image: "images/tea.jpg",
      alt: "Hot tea",
      description: "A comforting cup of hot tea."
   },
   {
      category: "drinks",
      group: "Drinks",
      name: "Hot Chocolate",
      price: 3.00,
      image: "images/hot-chocolate.jpg",
      alt: "Hot chocolate",
      description: "A rich and creamy hot chocolate drink."
   },
   {
      category: "drinks",
      group: "Drinks",
      name: "Iced Coffee",
      price: 3.50,
      image: "images/iced-coffee.jpg",
      alt: "Iced coffee",
      description: "Chilled coffee served over ice."
   },
   {
      category: "drinks",
      group: "Drinks",
      name: "Fresh Lemonade",
      price: 3.00,
      image: "images/lemonade.jpg",
      alt: "Fresh lemonade",
      description: "A refreshing lemonade with bright citrus flavor."
   },
   {
      category: "drinks",
      group: "Drinks",
      name: "Iced Tea",
      price: 3.00,
      image: "images/iced-tea.jpg",
      alt: "Iced tea",
      description: "A cool, refreshing glass of iced tea."
   },
   {
      category: "drinks",
      group: "Drinks",
      name: "Vanilla Latte",
      price: 4.25,
      image: "images/vanilla-latte.jpg",
      alt: "Vanilla latte",
      description: "A smooth latte with sweet vanilla flavor."
   },
   {
      category: "drinks",
      group: "Drinks",
      name: "Caramel Latte",
      price: 4.25,
      image: "images/caramel-latte.jpg",
      alt: "Caramel latte",
      description: "A warm latte with rich caramel flavor."
   },
   {
      category: "drinks",
      group: "Drinks",
      name: "Morning Blessing Coffee",
      price: 4.50,
      image: "images/morning-blessing-coffee.jpg",
      alt: "Morning blessing coffee",
      description: "A signature coffee created as a comforting morning drink."
   },
   {
      category: "drinks",
      group: "Drinks",
      name: "Chai Latte",
      price: 4.25,
      image: "images/chai-latte.jpg",
      alt: "Chai latte",
      description: "A spiced chai latte with warm, comforting flavor."
   },

   // SANDWICHES
   {
      category: "sandwiches",
      group: "Sandwiches",
      name: "Croissant Breakfast Sandwich",
      price: 6.50,
      image: "images/croissant-breakfast-sandwich.jpg",
      alt: "Croissant breakfast sandwich",
      description: "A breakfast sandwich served on a buttery croissant."
   },
   {
      category: "sandwiches",
      group: "Sandwiches",
      name: "Egg & Cheese Biscuit Sandwich",
      price: 5.50,
      image: "images/egg-and-cheese-biscuit-sandwich.jpg",
      alt: "Egg and cheese biscuit sandwich",
      description: "A warm biscuit sandwich with egg and cheese."
   },
   {
      category: "sandwiches",
      group: "Sandwiches",
      name: "Turkey & Cheese Sandwich",
      price: 7.00,
      image: "images/turkey-and-cheese-sandwich.jpg",
      alt: "Turkey and cheese sandwich",
      description: "A classic turkey and cheese sandwich with fresh bread."
   },
   {
      category: "sandwiches",
      group: "Sandwiches",
      name: "Chicken Salad Sandwich",
      price: 7.50,
      image: "images/chicken-salad-sandwich.jpg",
      alt: "Chicken salad sandwich",
      description: "A creamy chicken salad sandwich served on fresh bread."
   },
   {
      category: "sandwiches",
      group: "Sandwiches",
      name: "Grilled Cheese Sandwich",
      price: 5.00,
      image: "images/grilled-cheese-sandwich.jpg",
      alt: "Grilled cheese sandwich",
      description: "Toasted bread with melted cheese."
   },
   {
      category: "sandwiches",
      group: "Sandwiches",
      name: "Daily Bread Sandwich",
      price: 6.50,
      image: "images/daily-bread-sandwich.jpg",
      alt: "Daily bread sandwich",
      description: "A simple house sandwich made with fresh daily bread."
   },
   {
      category: "sandwiches",
      group: "Sandwiches",
      name: "Ham & Cheese Sandwich",
      price: 7.00,
      image: "images/ham-and-cheese-sandwich.jpg",
      alt: "Ham and cheese sandwich",
      description: "A savory ham and cheese sandwich with bakery-style bread."
   },
   {
      category: "sandwiches",
      group: "Sandwiches",
      name: "Veggie Sandwich",
      price: 6.50,
      image: "images/veggie-sandwich.jpg",
      alt: "Veggie sandwich",
      description: "A fresh vegetable sandwich with crisp toppings."
   }
];

// Display menu items when the page loads
document.addEventListener("DOMContentLoaded", function () {
   displayMenuItems("baked");
});

function displayMenuItems(category) {
   const menuContainer = document.getElementById("menuGallery");

   if (!menuContainer) {
      return;
   }

   menuContainer.innerHTML = "";

   const filteredItems = menuItems.filter(function (item) {
      return item.category === category;
   });

   const groupedItems = {};

   filteredItems.forEach(function (item) {
      if (!groupedItems[item.group]) {
         groupedItems[item.group] = [];
      }

      groupedItems[item.group].push(item);
   });

   for (let groupName in groupedItems) {
      const section = document.createElement("section");
      section.className = "menu-group";

      const heading = document.createElement("h3");
      heading.textContent = groupName;
      section.appendChild(heading);

      const grid = document.createElement("div");
      grid.className = "menu-grid";

      groupedItems[groupName].forEach(addMenuItemToGrid(grid));

      section.appendChild(grid);
      menuContainer.appendChild(section);
   }

   updateActiveMenuButton(category);
}

function addMenuItemToGrid(grid) {
   return function (item) {
      const card = createMenuCard(item);
      grid.appendChild(card);
   };
}

function createMenuCard(item) {
   const card = document.createElement("article");
   card.className = "menu-card";

   const image = document.createElement("img");
   image.src = item.image;
   image.alt = item.alt;
   image.dataset.itemName = item.name;
   image.addEventListener("click", openMenuModalFromImage);

   const title = document.createElement("h4");
   title.textContent = item.name;

   const price = document.createElement("p");
   price.textContent = "$" + item.price.toFixed(2);

   card.appendChild(image);
   card.appendChild(title);
   card.appendChild(price);

   return card;
}

function openMenuModalFromImage(event) {
   openMenuModal(event.currentTarget.dataset.itemName);
}

function updateActiveMenuButton(category) {
   const buttons = document.querySelectorAll(".filter-buttons button");

   buttons.forEach(function (button) {
      button.classList.remove("active");

      const clickAttr = button.getAttribute("onclick");

      if (clickAttr && clickAttr.includes("'" + category + "'")) {
         button.classList.add("active");
      }
   });
}

function openMenuModal(itemName) {
   const item = menuItems.find(function (menuItem) {
      return menuItem.name === itemName;
   });

   if (!item) {
      return;
   }

   const modal = document.getElementById("menuModal");
   const modalImage = document.getElementById("modalImage");
   const modalTitle = document.getElementById("modalTitle");
   const modalPrice = document.getElementById("modalPrice");
   const modalDescription = document.getElementById("modalDescription");

   if (!modal || !modalImage || !modalTitle || !modalPrice || !modalDescription) {
      return;
   }

   modalImage.src = item.image || "images/placeholder.jpg";
   modalImage.alt = item.alt || "Menu item preview";
   modalTitle.textContent = item.name;
   modalPrice.textContent = "$" + item.price.toFixed(2);
   modalDescription.textContent = item.description;

   modal.style.display = "block";
}

function closeMenuModal() {
   const modal = document.getElementById("menuModal");

   if (modal) {
      modal.style.display = "none";
   }
}

window.addEventListener("click", function (event) {
   const modal = document.getElementById("menuModal");

   if (modal && event.target === modal) {
      modal.style.display = "none";
   }
});