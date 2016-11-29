// Slideshow Activity
// Students: follow the instructions below:

// TODO: Put links to our images in this image array.
var images = ["https://myanimelist.cdn-dena.com/s/common/uploaded_files/1444895722-237ed11c872f4842a21680d42a6ec47a.jpeg","http://orig06.deviantart.net/20d1/f/2015/348/7/b/blue_dragon_v2_by_sandara-d9k5wdn.jpg","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQw_u1jvgnh4NIvqbUlg-4_-QpUghCIA1-r3UBm7dX1L14SGitIAg"];

// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
$('#start').on("click", function() {
	startSlideshow();
});
// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
$('#stop').on("click", function() {
	stopSlideshow();
});

// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextImage() {
	count++;
  // TODO: Increment the count by 1.


  // TODO: Show the loading gif in the "image-holder" div.
  $('#image-holder').html("<img src='loading.gif'>")

  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayImage, 1000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === images.length) {
  	count = 0;
  }
}
function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 1500);
}
function stopSlideshow() {

  // TODO: Put our clearInterval here:
  clearInterval(showImage);
}

// This will run the display image function as soon as the page loads.
displayImage();
