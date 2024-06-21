const users = [
    { name: 'John Doe', age: 28, phone: '123-456-7890', address: '123 Elm Street' },
    { name: 'Jane Smith', age: 34, phone: '987-654-3210', address: '123 Elm Street' },
    { name: 'Emily Johnson', age: 22, phone: '555-123-4567', address: '789 Pine Road' },
    { name: 'Michael Brown', age: 45, phone: '222-333-4444', address: '101 Maple Lane' },
    { name: 'Sarah Davis', age: 29, phone: '333-444-5555', address: '123 Elm Street' },
    { name: 'David Wilson', age: 31, phone: '444-555-6666', address: '103 Cedar Circle' },
    { name: 'Laura Martinez', age: 26, phone: '555-666-7777', address: '123 Elm Street' },
    { name: 'James Taylor', age: 38, phone: '666-777-8888', address: '105 Willow Way' },
    { name: 'Emma Anderson', age: 27, phone: '777-888-9999', address: '106 Aspen Alley' },
    { name: 'Robert Thomas', age: 33, phone: '888-999-0000', address: '123 Elm Street' }
];

// Function to filter users by address
function filterUsersByAddress(users, address) {
    return users.filter(user => user.address === address);
}

// Function to create and append rows to the table
function populateTable(users) {
    const tableBody = document.querySelector('#userTable tbody');

    users.forEach (user => {
        // Create a new table row
        const row = document.createElement('tr');

        // Create and append cells for each property
        Object.values(user).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}


// Call the function to populate the original table on page load
window.onload = function() {
    // populateTable(users); // Populates the original table with all users
    const addressToFilter = '123 Elm Street';
    const filteredUsers = filterUsersByAddress(users, addressToFilter);

    // Populate another table (assuming you have an empty table with id 'filteredUserTable')
    populateTable(filteredUsers);
};
