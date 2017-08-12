$(document).ready(function() {
  debugger;
  console.log("hello!");
  $date = $('.datepicker');
  $date.pickadate();
  $date.val($.datepicker.formatDate('dd/mm/yyyy', new Date()));
})