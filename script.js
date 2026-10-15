// Step 2: Employee Role Access System
let role = prompt("Enter your role (admin / manager / developer / intern)");
role = role === null ? "" : role.trim().toLowerCase();

switch (role) {
  case "admin":
    alert("Full system access");
    break;

  case "manager":
    alert("Team management access");
    break;

  case "developer":
    alert("Code access");
    break;

  case "intern":
    alert("Limited access");
    break;

  default:
    alert("Invalid input. Please try again.");
}

// Step 3: Online Payment Method Selection
let payment = prompt("Choose payment method (credit / debit / upi / cod)");
payment = payment === null ? "" : payment.trim().toLowerCase();

switch (payment) {
  case "credit":
    alert("You selected Credit Card. Please enter your card details.");
    break;

  case "debit":
    alert("You selected Debit Card. Please enter your card details.");
    break;

  case "upi":
    alert("You selected UPI. Please enter your UPI ID.");
    break;

  case "cod":
    alert("You selected Cash on Delivery. Please pay when the order arrives.");
    break;

  default:
    alert("Invalid input. Please try again.");
}

// Step 4: Order Status Checker
let status = prompt("Enter order status (placed / packed / shipped / delivered / cancelled)");
status = status === null ? "" : status.trim().toLowerCase();

switch (status) {
  case "placed":
    alert("Your order has been placed successfully.");
    break;

  case "packed":
    alert("Your order has been packed and is ready for shipping.");
    break;

  case "shipped":
    alert("Your order has been shipped and is on the way.");
    break;

  case "delivered":
    alert("Your order has been delivered. Enjoy!");
    break;

  case "cancelled":
    alert("Your order has been cancelled.");
    break;

  default:
    alert("Invalid input. Please try again.");
}

// Step 5: Office Working Day Checker
let day = prompt("Enter day name (Monday - Sunday)");
day = day === null ? "" : day.trim().toLowerCase();

switch (day) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    alert("Working day");
    break;

  case "saturday":
    alert("Half day");
    break;

  case "sunday":
    alert("Holiday");
    break;

  default:
    alert("Invalid input. Please try again.");
}