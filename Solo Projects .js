
$(document).ready(function() {
    $('.book-button').click(function() {
      var productName = $(this).siblings('h3').text();
      var productPrice = $(this).siblings('p').text();
      
      
      var confirmationMessage = "Do you want to sale " + productName + " for " + productPrice + "?";
      if (confirm(confirmationMessage)) {
        alert("Product booked!");
      }
    });
  });