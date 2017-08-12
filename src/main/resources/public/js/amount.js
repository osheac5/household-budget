$(document).ready(function() {
  $date = $('.datepicker');
  $date.datepicker();
  $date.val($.datepicker.formatDate('dd/mm/yyyy', new Date()));
})