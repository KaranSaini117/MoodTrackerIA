// enter today's date by default
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").value =  m + "-" + d + "-" + y;