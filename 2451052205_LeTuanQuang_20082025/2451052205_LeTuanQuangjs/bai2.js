$(document).ready(function () {
  $('#checkBtn').click(function () {
    var available = $('input[name="available"]:checked').val();
    var shipping = $('input[name="shipping"]:checked').val();

    if (available === 'true') {
      $('#stock').html('<img src="../img/tick-cross-true.png" class="icon">');
    } else if (available === 'false') {
      $('#stock').html('<img src="../img/tick-cross-false.png" class="icon">');
    }

    if (shipping === 'true') {
      $('#shipping').html('<img src="../img/tick-cross-true.png" class="icon">');
    } else if (shipping === 'false') {
      $('#shipping').html('<img src="../img/tick-cross-false.png" class="icon">');
    }
  });
});
