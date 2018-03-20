function User(name, initialDeposit, depositAmount) {
  this.name = name;
  this.initialDeposit = initialDeposit;
  this.depositAmount = depositAmount;
}

User.prototype.add = function() {
  return this.initialDeposit + this.depositAmount;
};



$(document).ready(function() {

  $("#formOne").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val()
    var initialDeposit = parseInt($("#initialDeposit").val());
    var user = new User(name, initialDeposit, depositAmount);
    console.log(user.name + " " + user.initialDeposit);

    $("ul#displayCurrentBalance").append("<li>" + initialDeposit + "</li>");

    console.log(user.name + " " + user.initialDeposit);

    $("#formUpdate").click(function(event) {

      event.preventDefault();


      // PROBLEM CHILD
      var depositAmount = parseInt($("#depositAmount").val());
      // var withdrawalAmount = parseInt($("#withdrawalAmount").val());

      console.log(user);
      console.log(depositAmount);

      $("ul#displayCurrentBalance").append("<li>" + initialDeposit.val() + depositAmount.val() + "</li>");

    });
  });


});
