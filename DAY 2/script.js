let customers = [];

function addCustomer() {
    const customerNameInput = document.getElementById("customerNameInput");
    const customerEmailInput = document.getElementById("customerEmailInput");
    const name = customerNameInput.value.trim();
    const email = customerEmailInput.value.trim();
    if (name === "" || email === "") return;

    const customer = {
        id: Date.now(),
        name: name,
        email: email,
        joinedDate: new Date()
    };

    customers.push(customer);
    customerNameInput.value = "";
    customerEmailInput.value = "";
    displayCustomers();
}

function deleteCustomer(customerId) {
    customers = customers.filter(customer => customer.id !== customerId);
    displayCustomers();
}

function displayCustomers() {
    const customerListContainer = document.getElementById("customerList");
    customerListContainer.innerHTML = "<h2>Customer List</h2>";

    customers.forEach(customer => {
        const customerElement = document.createElement("div");
        customerElement.className = "customer";

        const customerName = document.createElement("span");
        customerName.textContent = customer.name;

        const customerEmail = document.createElement("span");
        customerEmail.textContent = customer.email;

        const customerButtons = document.createElement("div");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteCustomer(customer.id);

        customerButtons.appendChild(deleteButton);

        customerElement.appendChild(customerName);
        customerElement.appendChild(customerEmail);
        customerElement.appendChild(customerButtons);

        customerListContainer.appendChild(customerElement);
    });
}

// Initial display of customers
displayCustomers();
