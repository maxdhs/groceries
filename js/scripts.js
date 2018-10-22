$(document).ready(function() {
  $('form#groceries').submit(function(event) {
    event.preventDefault();
    $("#groceries").hide();

    var groceryList = [$("#item1").val(), $("#item2").val(), $("#item3").val(), $("#item4").val()];

    var toUpperCaseGroceryList = groceryList.map(function(item){
      return item.toUpperCase();
    })

    var sortedGroceryList = toUpperCaseGroceryList.sort();

    $("#story").append(sortedGroceryList + " ,");
    $("p").show();

  });
});
