// Initialize Firebase
var config = {
    apiKey: "AIzaSyDs3byvsBHk5wMDnbp6d5Qz77vtW_9-IHA",
    authDomain: "codingbootcamp-85a37.firebaseapp.com",
    databaseURL: "https://codingbootcamp-85a37.firebaseio.com",
    storageBucket: "codingbootcamp-85a37.appspot.com",
    messagingSenderId: "188437271988"
  };

firebase.initializeApp(config);

var database = firebase.database();
var initialValue = 100;
var clickCounter = initialValue;

// --------------------------------------------------------------

database.ref().on("value", function(snapshot) {

  clickCounter = snapshot.val().clickCount;

  $("#click-value").html(clickCounter);

}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

$("#click-button").on("click", function() {

  clickCounter--;

  if (clickCounter === 0) {
    alert("Phew! You made it! That sure was a lot of clicking.");
    clickCounter = initialValue;
  }

  database.ref().set({
    clickCount: clickCounter
  });


});

$("#restart-button").on("click", function() {

  clickCounter = initialValue;

  database.ref().set({
    clickCount: clickCounter
  });

  $("#click-value").html(clickCounter);

});
