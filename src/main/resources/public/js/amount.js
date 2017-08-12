$(document).ready(function() {
  debugger;
  console.log("hello!");
  $date = $('.datepicker');
  $date.datepicker();
  $date.val($.datepicker.formatDate('dd/mm/yyyy', new Date()));
})