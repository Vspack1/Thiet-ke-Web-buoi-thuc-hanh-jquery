$(function () {
    $('.tab-control').on('click', function (e) {
      e.preventDefault(); // Ngăn chuyển hướng mặc định
  
      let $this = $(this);
      let $parentLi = $this.parent(); // <li>
      let $tabs = $parentLi.parent().children(); // tất cả <li>
      let $tabContainer = $parentLi.parent().parent().parent(); // div.tabs
      let target = $this.attr('href'); // href="#tab-1", etc
  
      // Bỏ active cũ trên tab
      $tabs.removeClass('active');
  
      // Thêm active cho tab được click
      $parentLi.addClass('active');
  
      // Ẩn tất cả panel
      $tabContainer.find('.tab-panel').removeClass('active');
  
      // Hiện panel tương ứng
      $(target).addClass('active');
    });
  });
  