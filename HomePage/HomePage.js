// oop function to get current date and display it on webpage
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = "Today is " + m + "/" + d + "/" + y;