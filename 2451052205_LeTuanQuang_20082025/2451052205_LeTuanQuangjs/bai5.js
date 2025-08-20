$(document).ready(function () {
    $('#colorSelect').change(function () {
      const selectedColor = $(this).val();
      
      if (selectedColor) {
        $('#content').css('background-color', selectedColor);
      }
    });
  });
  