function redirectToTop10() {
  // Redirect to the Top 10 section
  window.location.href = '#top10';

  // Remove the original section from the DOM
  document.querySelector('.original-section').remove();
}

// function togglePopup() {
//   document.getElementById("popup-1").classList.toggle("active");

//   document.addEventListener('keydown', function(event){
//     if(event.key === "Escape"){
//   document.getElementById("popup-1").classList.toggle("active");
//     }
//   });

  
// }
var isOpened = false;

function togglePopup(imageWidth, imageHeight) {


  var popup = document.getElementById("popup-1");
  popup.classList.toggle("active");

  // Resize the popup based on image dimensions
  resizePopup(imageWidth, imageHeight);

  // Function to resize the popup based on image dimensions
  function resizePopup(imageWidth, imageHeight) {
      var content = popup.querySelector(".content");
      var currentWidth = content.offsetWidth;
      var currentHeight = content.offsetHeight;
      var newWidth = Math.max(currentWidth, imageWidth + 40); // Add some padding to the width
      var newHeight = currentHeight + imageHeight + 20; // Add some spacing between images
      content.style.width = newWidth + "px";
      content.style.height = newHeight + "px";

      // Center the image horizontally
      var image = content.querySelector("img");
      image.style.display = "block";
      image.style.marginLeft = "auto";
      image.style.marginRight = "auto";
      isOpened = true;
  }
}



// Function to toggle the popup


