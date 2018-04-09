var root = document.querySelector(':root');

console.log(root);

var rootStyles = getComputedStyle(root);

var red = rootStyles.getPropertyValue('--red');
var yellow = rootStyles.getPropertyValue('--yellow');
console.log(red);

root.style.setProperty('--red','green'); 
root.style.setProperty('--yellow','orange');