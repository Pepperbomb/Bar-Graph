// generate the graph's bars using this data array

data = [
  'green', 100,
  'yellow', 50,
  'orange', 10,
  'purple', 75,
  'brown', 52,
  'lime', 16,
  'coral', 71,
  'cyan', 85,
  'linen', 22,
  'maroon', 55,
  'navy', 91,
  'olive', 41,
  'peru', 34,
  'pink', 43,
  'silver', 11,
  'tan', 60,
  'salmon', 87,
  'wheat', 12
]

for(var i = 0; i < data.length; i++) {
    
    var bar = document.createElement('div');            // create an empty div
    bar.setAttribute('class', 'bar');                 // assign the div class="piece"
    document.getElementById('frame').appendChild(bar);  // add the div to the id="board"
    bar.style.left = i*20 + 'px';
    bar.style.height = '50px';
    bar.style.backgroundColor = "red";
    i++;
    
if( i < 2) {
    bar.style.height = '400px';
    bar.style.backgroundColor = "green";
}

else if( i < 4) {
    bar.style.height = '200px';
    bar.style.backgroundColor = "yellow";
}

else if( i < 6) {
    bar.style.height = '40px';
    bar.style.backgroundColor = "orange";
}

else if( i < 8) {
    bar.style.height = '300px';
    bar.style.backgroundColor = "purple";
}

else if( i < 10) {
    bar.style.height = '208px';
    bar.style.backgroundColor = "brown";
}

else if( i < 12) {
    bar.style.height = '64px';
    bar.style.backgroundColor = "lime";
}

else if( i < 14) {
    bar.style.height = '284px';
    bar.style.backgroundColor = "coral";
}

else if( i < 16) {
    bar.style.height = '340px';
    bar.style.backgroundColor = "cyan";
}

else if( i < 18) {
    bar.style.height = '88px';
    bar.style.backgroundColor = "linen";
}

else if( i < 20) {
    bar.style.height = '220px';
    bar.style.backgroundColor = "maroon";
}

else if( i < 22) {
    bar.style.height = '364px';
    bar.style.backgroundColor = "navy";
}

else if( i < 24) {
    bar.style.height = '164px';
    bar.style.backgroundColor = "olive";
}

else if( i < 26) {
    bar.style.height = '136px';
    bar.style.backgroundColor = "peru";
}

else if( i < 28) {
    bar.style.height = '172px';
    bar.style.backgroundColor = "pink";
}

else if( i < 30) {
    bar.style.height = '44px';
    bar.style.backgroundColor = "silver";
}

else if( i < 32) {
    bar.style.height = '240px';
    bar.style.backgroundColor = "tan";
}

else if( i < 34) {
    bar.style.height = '348px';
    bar.style.backgroundColor = "salmon";
}

else if( i < 36) {
    bar.style.height = '48px';
    bar.style.backgroundColor = "wheat";
}

}
