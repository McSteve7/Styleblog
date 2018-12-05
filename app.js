const elem = document.getElementById('wrapper');
const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];
// Allows the change of background to the colours in the array rainbow
function change() {
document.body.style.background = rainbow[Math.floor(7*Math.random())];
}
elem.addEventListener('click', change);
// Fetch the li items in index.html file
const listings = document.getElementsByTagName('li');
// If the list items is more than 1
if (listings.lenght > 0){
    //Select the first member of the list array [0]
    const el = listings[0];
    //The change the colour of the first member of the array
    el.className = 'cool';
}
// Select the li starting point and find the children
var startItem = document.getElementById('contact');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;
// Change the value of siblings class attributes
prevItem.className = 'complete';
nextItem.className = 'cool';