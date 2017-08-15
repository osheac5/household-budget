$(document).ready(function() {
  $date = $('#date_input');
  $date.val($.datepicker.formatDate('d MM, yy', new Date()));
})