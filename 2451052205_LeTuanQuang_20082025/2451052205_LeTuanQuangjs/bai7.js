$(document).ready(function() {
    // Khi checkbox "All" thay đổi trạng thái
    $('#checkAll').change(function() {
      $('.genre').prop('checked', $(this).prop('checked'));
    });
  
    // Khi các checkbox genre thay đổi trạng thái
    $('.genre').change(function() {
      // Nếu tất cả các checkbox genre được check thì check "All"
      if ($('.genre:checked').length === $('.genre').length) {
        $('#checkAll').prop('checked', true);
      } else {
        $('#checkAll').prop('checked', false);
      }
    });
  });
  