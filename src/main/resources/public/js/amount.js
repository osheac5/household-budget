$(document).ready(function() {
  $date = $('.datepicker');
  $date.pickadate();
  $date.val($.datepicker.formatDate('dd/mm/yy', new Date()));
})