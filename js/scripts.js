function User(name, balance) {
  this.name = name;
  this.balance = balance;
}

function reset() {
  $("#depositAmount").val(0);
  $("#withdrawalAmount").val(0);
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



    $("#formUpdate").submit(function(event) {
      event.preventDefault();

      var deposit = parseInt($("#depositAmount").val());
      var withdrawal = parseInt($("#withdrawalAmount").val());
      user.deposit = deposit;
      user.withdrawal = withdrawal;

      user.adjust();

      $("#currentBalance").text(user.balance);

      reset();
    });

    $("#userName").text(user.name);
    $("#currentBalance").text(user.balance);

  });


});
