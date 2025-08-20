$(document).ready(function() {
    $('#showPwd').change(function() {
      const passwordField = $('#password');
      if ($(this).prop('checked')) {
        passwordField.attr('type', 'text');
      } else {
        passwordField.attr('type', 'password');
      }
    });
  
    // Optional: chặn submit để không reload trang
    $('form').on('submit', function(e) {
      e.preventDefault(); // chặn reload
      alert('Login clicked!'); // test login
    });
  });
  