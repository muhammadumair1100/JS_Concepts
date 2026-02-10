const bankName = "Coder Bank";

function openAccount(customerName) {
  let balance = 0;

  function deposit(amount) {
    balance = balance + amount;

    console.log(
      `Hi ${customerName}, ${amount} deposited. New balance: ${balance} (${bankName})`,
    );
  }

  return deposit;
}

const myAccount = openAccount("Ali");

myAccount(200);
myAccount(500);
