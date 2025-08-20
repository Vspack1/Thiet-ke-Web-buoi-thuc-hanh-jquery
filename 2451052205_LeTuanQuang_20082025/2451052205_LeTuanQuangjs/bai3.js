$(document).ready(function () {
    const now = new Date();
    const hour = now.getHours(); // Lấy giờ hiện tại
    let message;
  
    if (hour > 18) {
      message = "Good evening!";
    } else if (hour > 12) {
      message = "Good afternoon!";
    } else if (hour > 0) {
      message = "Good morning!";
    } else {
      message = "Welcome!";
    }
  
    // Gắn vào thẻ h3 trong #greetingMsg
    $('#greetingMsg').html(`<h3>${message.toUpperCase()}</h3>`);
  });
  