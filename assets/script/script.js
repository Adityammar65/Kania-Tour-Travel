document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('form-sewa');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    
    // Get user input
    const category = document.getElementById('category').value;
    
    // Create alert message
    const alertMsg = `Anda telah menyewa ${category}\nKami akan menghubungi anda untuk info lebih lanjut`;
    
    // Trigger alert
    alert(alertMsg);
  });
});
