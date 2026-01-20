// first
let temperature = Number(prompt("Enter the temperature in Celsius"));

if (temperature > 30)
    alert("It is warm today");
else 
    alert("It is cold today");

// second
let username = prompt("Enter username");
let password = prompt("Enter password");

if (username === "harshit" && password === "12345") {
    alert("Login successful");
} else {
    alert("Login failed");
}

// third
let marks = Number(prompt("Enter the marks"));

if (marks >= 90) {
    alert("A Grade");
} else if (marks >= 60) {
    alert("B Grade");
} else if (marks >= 40) {
    alert("C Grade");
} else {
    alert("Fail");
}

// fourth
let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));

if (num1 > num2) {
    alert("First number is greater");
} else if (num2 > num1) {
    alert("Second number is greater");
} else {
    alert("Both numbers are equal");
}

// fifth
let day = Number(prompt("Enter number from 1 to 7"));

switch (day) {
    case 1:
        alert("Monday");
        break;
    case 2:
        alert("Tuesday");
        break;
    case 3:
        alert("Wednesday");
        break;
    case 4:
        alert("Thursday");
        break;
    case 5:
        alert("Friday");
        break;
    case 6:
        alert("Saturday");
        break;
    case 7:
        alert("Sunday");
        break;
    default:
        alert("Invalid day");
}

// sixth
let balance = 11000;
let withdraw = Number(prompt("Your balance is $" + balance + ". Enter withdrawal amount"));

if (withdraw > 0 && withdraw <= balance) {
    balance -= withdraw;
    alert("Withdrawal successful. Remaining balance $" + balance);
} else {
    alert("Invalid or insufficient balance");
}

// seventh
let bill = Number(prompt("Enter total bill amount"));

if (bill > 10000) {
    alert("Final amount: " + bill * 0.8);
} else if (bill > 5000) {
    alert("Final amount: " + bill * 0.9);
} else {
    alert("No discount. Amount: " + bill);
}

// eighth
let units = Number(prompt("Enter electricity units"));
alert("Electricity bill: " + units * 12);

// ninth
let distance = Number(prompt("Enter distance travelled"));
let fare = null;

if (distance > 10) {
    fare = distance * 45;
} else if (distance > 5) {
    fare = distance * 50;
} else {
    fare = distance * 55;
}
alert("Taxi fare: " + fare);

// tenth
alert("Pizza = 1\nBurger = 2\nCold Drink = 3");

let item = Number(prompt("Enter item number"));
let quantity = Number(prompt("Enter quantity"));

if (item === 1) {
    alert("Total amount: " + quantity * 200);
} else if (item === 2) {
    alert("Total amount: " + quantity * 130);
} else if (item === 3) {
    alert("Total amount: " + quantity * 50);
} else {
    alert("Invalid selection");
}