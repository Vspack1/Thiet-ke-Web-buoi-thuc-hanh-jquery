$(document).ready(function() {
    $('#other-text').hide();
  
    $('input[name="source"]').change(function() {
      if ($('#other').is(':checked')) {
        $('#other-text').show().focus();
      } else {
        $('#other-text').hide();
      }
    });
  
    // Ngăn form submit reload trang
    $('#how-heard').submit(function(e) {
      e.preventDefault();
      alert('Form submitted!');
    });
  });
  