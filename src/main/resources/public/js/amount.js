$(document).ready(function() {
  $date = $('.datepicker');
  $date.pickadate();
  $date.val($.datepicker.formatDate('d MM, yy', new Date()));
})