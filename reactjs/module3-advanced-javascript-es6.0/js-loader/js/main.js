var Myvar;
// Function to set a global variable

function mainFunction() {
  Myvar=setTimeout(display,4000); 
}
// Function to get a global variable

function display() {
  document.getElementById("loader").style = "display: none; opacity: 0; transition: opacity 1s ease-in-out;";
  document.getElementById("mainContent").style = "display: block; opacity: 1; transition: opacity 1s ease-in-out;";
}

// Call the main function