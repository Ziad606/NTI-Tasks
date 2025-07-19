let products = [];
let originalProducts = [];
let productId = 0;
let editedProductId = 0;

function addProduct() {
    let submitButton = document.getElementById("submitButton");

    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let price = parseFloat(document.getElementById("price").value) || 0;
    let category = document.getElementById("category").value;
    let isAvailable = document.getElementById("isAvailable").checked;

    productId++;
    let product = {
        id: productId,
        name,
        description,
        price,
        category,
        isAvailable,
    };

    products.push(product);
    originalProducts.push({ ...product });

    displayProducts();
    clearForm();
    submitButton.disabled = false;
}

function handleSubmit(event) {
    event.preventDefault();
    let submitButton = document.getElementById("submitButton");
    submitButton.disabled = true;

    if (submitButton.textContent === "Add Product") {
        addProduct();
    } else {
        updateProduct();
    }
}

function displayProducts() {
    let productList = document.getElementById("productListBody");

    productList.innerHTML = "";

    if (products.length === 0) {
        productList.innerHTML =
            '<tr><td colspan="6" style="text-align: center; padding: 20px; color: #666;">No products found</td></tr>';
        return;
    }

    products.forEach((product) => {
        let productItem = document.createElement("tr");
        productItem.innerHTML = `
                  <td>${product.name}</td>
                  <td>${product.description}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>${product.category}</td>
                  <td>${product.isAvailable ? "Yes" : "No"}</td>
                  <td>
                      <button class="deleteButton" onclick="deleteProduct(${
                          product.id
                      })">Delete</button>
                      <button class="editButton" onclick="editProduct(${
                          product.id
                      })">Edit</button>
                  </td>
                `;
        productList.appendChild(productItem);
    });
}

function deleteProduct(id) {
    products = products.filter((product) => product.id !== id);
    originalProducts = originalProducts.filter((product) => product.id !== id);
    displayProducts();
}

function editProduct(id) {
    let product = products.find((product) => product.id === id);
    let nameInput = document.getElementById("name");
    let descriptionInput = document.getElementById("description");
    let priceInput = document.getElementById("price");
    let categoryInput = document.getElementById("category");
    let isAvailableInput = document.getElementById("isAvailable");
    let submitButton = document.getElementById("submitButton");

    nameInput.value = product.name;
    descriptionInput.value = product.description;
    priceInput.value = product.price;
    categoryInput.value = product.category;
    isAvailableInput.checked = product.isAvailable;
    submitButton.textContent = "Update Product";
    submitButton.disabled = false;
    editedProductId = id;
}

function updateProduct() {
    let submitButton = document.getElementById("submitButton");
    submitButton.disabled = true;

    let nameInput = document.getElementById("name");
    let descriptionInput = document.getElementById("description");
    let priceInput = document.getElementById("price");
    let categoryInput = document.getElementById("category");
    let isAvailableInput = document.getElementById("isAvailable");

    let product = products.find((product) => product.id === editedProductId);
    let originalProduct = originalProducts.find(
        (product) => product.id === editedProductId
    );

    if (product) {
        product.name = nameInput.value;
        product.description = descriptionInput.value;
        product.price = parseFloat(priceInput.value) || 0;
        product.category = categoryInput.value;
        product.isAvailable = isAvailableInput.checked;
    }

    if (originalProduct) {
        originalProduct.name = nameInput.value;
        originalProduct.description = descriptionInput.value;
        originalProduct.price = parseFloat(priceInput.value) || 0;
        originalProduct.category = categoryInput.value;
        originalProduct.isAvailable = isAvailableInput.checked;
    }

    displayProducts();
    clearForm();
    submitButton.disabled = false;
    submitButton.textContent = "Add Product";
}

function searchProduct() {
    let searchInput = document.getElementById("searchInput");
    let searchValue = searchInput.value.trim();
    if (searchValue === "") {
        products = [...originalProducts];
    } else {
        products = originalProducts.filter(
            (product) =>
                product.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                product.description
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                product.category
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
        );
    }
    displayProducts();
}

function filterCategory() {
    let filterCategory = document.getElementById("filterCategory").value;
    if (filterCategory === "") {
        products = [...originalProducts];
    } else {
        products = originalProducts.filter((product) =>
            product.category
                .toLowerCase()
                .includes(filterCategory.toLowerCase())
        );
    }
    displayProducts();
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("category").value = "";
    document.getElementById("isAvailable").checked = false;
}

document.getElementById("productForm").addEventListener("submit", handleSubmit);
