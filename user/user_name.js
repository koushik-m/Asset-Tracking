var name = sessionStorage.getItem('name');
console.log(name);
var hello = document.getElementById('hello');
document.getElementById('hello').innerHTML = "   Hello "+name;
document.getElementById('name_table').innerHTML = name;


