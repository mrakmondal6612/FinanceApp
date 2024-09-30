// Handle Login
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;
  
    // Perform login request
    fetch(`/api/${userType}s/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          window.location.href = userType === 'user' ? 'userDashboard.html' : 'merchantDashboard.html';
        } else {
          alert('Login failed');
        }
      })
      .catch((error) => console.error('Error:', error));
  });
  
  // Fetch transaction/sales history, balance, etc., on dashboard pages
  document.addEventListener('DOMContentLoaded', () => {
    const transactionList = document.getElementById('transactionList');
    const salesList = document.getElementById('salesList');
    const balanceElement = document.getElementById('balance');
    const totalSalesElement = document.getElementById('totalSales');
  
    if (transactionList) {
      // Fetch user's transaction history
      fetch('/api/users/1234/transactions')  // Example user ID
        .then((response) => response.json())
        .then((transactions) => {
          transactions.forEach((transaction) => {
            const li = document.createElement('li');
            li.textContent = `Transaction: $${transaction.amount}, Status: ${transaction.status}`;
            transactionList.appendChild(li);
          });
        });
    }
  
    if (salesList) {
      // Fetch merchant's sales history
      fetch('/api/merchants/5678/sales')  // Example merchant ID
        .then((response) => response.json())
        .then((sales) => {
          sales.forEach((sale) => {
            const li = document.createElement('li');
            li.textContent = `Sale: $${sale.amount}, Date: ${new Date(sale.date).toLocaleDateString()}`;
            salesList.appendChild(li);
          });
        });
    }
  });
  