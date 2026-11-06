/* project 1
 *///


/* var userName = prompt("Enter your name:");
var age = prompt("Enter your current age:");
var currentYear = prompt("Enter current year:");

var birthYear = currentYear - age;

alert("Hello " + userName + ", your birth year is " + birthYear + "!");

 */





/*  projevt 2

 
var item1 = Number(prompt("Enter first item price:"));
var item2 = Number(prompt("Enter second item price:"));
var item3 = Number(prompt("Enter third item price:"));

// Calculate Total Bill
var totalBill = item1 + item2 + item3;

// Get Family Members
var members = Number(prompt("Enter total family members:"));

// Calculate /* Per Person Share
if (members > 0) {

    var perPerson = totalBill / members;

    alert(
        "Total Bill: Rs. " + totalBill +
        "\nFamily Members: " + members +
        "\nEach Person Share: Rs. " + perPerson.toFixed(2)
    );

} else {

    alert("Error! Family members must be greater than zero.");

}
 */ 



/* project 3 */

/* var a = Number(prompt("Enter first number"));
var op = prompt("Enter operator (+, -, *, /)");
var b = Number(prompt("Enter second number"));

var ans;

if (op == "+") {
    ans = a + b;
}
else if (op == "-") {
    ans = a - b;
}
else if (op == "*") {
    ans = a * b;
}
else if (op == "/") {
    if (b == 0) {
        alert("Cannot divide by zero");
    }
    else {
        ans = a / b;
    }
}
else {
    alert("Invalid operator");
}

if (ans !== undefined) {
    alert("Your answer is: " + ans);
}
 */

/* project 4 */


// Assignment 4

/* var age = Number(prompt("Enter your age:"));

var student = prompt("Are you a student? (yes/no)");

var code = prompt("Enter promo code:");

var price = 500;

if (age < 12) {
    price = 0;
    alert("Your ticket is free!");
}
else if (student == "yes") {
    price = price - (price * 20 / 100);
}

alert("Your ticket price is Rs. " + price);

if (code == "VIP123") {
    alert("Congratulations! You got VIP backstage pass.");
}
else {
    alert("No VIP pass.");
} *Thank you for your business! We look forward to working with you again.