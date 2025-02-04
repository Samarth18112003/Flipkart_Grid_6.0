document.addEventListener('DOMContentLoaded', () => {
    const captureButton = document.getElementById('capture-btn');
    const cameraImage = document.getElementById('camera-image');
    const productName = document.getElementById('product-name');
    const productMRP = document.getElementById('product-mrp');
    const productExpiry = document.getElementById('product-expiry');
    const productStatus = document.getElementById('product-status');
    const alertsContainer = document.getElementById('alerts-container');
  
    // Simulate capturing an image
    captureButton.addEventListener('click', () => {
      cameraImage.src = 'C:/Users/SAMARTH/OneDrive/Desktop/GRID6.0/UI/GA.jpeg';
    });
  
    // Simulate product details (replace with real API call)
    const productData = {
      name: 'Apple',
      mrp: '₹50',
      expiry: '2024-12-31',
      status: 'PASS',
    };
  
    productName.textContent = productData.name;
    productMRP.textContent = productData.mrp;
    productExpiry.textContent = productData.expiry;
    productStatus.textContent = productData.status;
    productStatus.className = productData.status === 'PASS' ? 'green' : 'red';
  
    // Simulate real-time alerts
    /*setInterval(() => {
      const alert = document.createElement('div');
      alert.className = 'alert';
      alert.textContent = 'Packaging error detected!';
      alertsContainer.appendChild(alert);
    }, 10000);*/
  });
  