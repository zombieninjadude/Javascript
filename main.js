// this is a comment in JavaScript

/* this is a
multiline comment */

var yourName;

yourName = prompt("Please input your name.");

if (yourName === "") {
yourName = prompt("Please input your name.");
}

if (yourName === null) {
alert("OK, fine. ");
} else {
alert("Hello, " + yourName);
}