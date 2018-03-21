function User(name, balance) {
  this.name = name;
  this.balance = balance;
}

User.prototype.adjust = function() {
  return this.balance += (this.deposit - this.withdrawal);
};



$(document).ready(function() {

  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val()
    var initialDeposit = parseInt($("#initialDeposit").val());
    var user = new User(name, initialDeposit);

    $("ul#displayCurrentBalance").append("<li>" + initialDeposit + "</li>");


    $("#formUpdate").click(function(event) {

      event.preventDefault();

      var deposit = parseInt($("#depositAmount").val());
      var withdrawal = parseInt($("#withdrawalAmount").val());
      user.deposit = deposit;
      user.withdrawal = withdrawal;

      user.adjust();

      $("ul#displayCurrentBalance").append("<li>" + user.balance + "</li>");

    });
  });


});
