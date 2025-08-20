$(document).ready(function () {
    function updateCost() {
      const price = parseFloat($('#price').val()) || 0;
      const quantity = parseInt($('#quantity').val()) || 0;
      const total = price * quantity;
  
      $('#cost').text(`$${total}`);
    }
  
    // Gọi hàm mỗi khi người dùng thay đổi input
    $('#price, #quantity').on('input', updateCost);
  
    // Gọi lần đầu để hiển thị giá trị ban đầu
    updateCost();
  });
  