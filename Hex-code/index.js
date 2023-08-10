var hexcode = document.getElementById("hex-code");
const circle = document.getElementById("circle");

function generate(){
hexcode.value= `#${Math.random().toString(16).slice(2, 8).padEnd(6,0)}`;
circle.style.backgroundColor = hexcode.value;
}

function myFunction() {
    // // Get the text field
    // var hexcode = document.getElementById("hex-code");
  
    // Select the text field
    hexcode.select();
    hexcode.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(hexcode.value);
  
    // Alert the copied text
    alert("Copied the text: " + hexcode.value);
  }
  

  