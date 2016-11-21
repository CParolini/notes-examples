FizzBuzz

for (var i = 0; i < 101; i++) {
    if (i % 15 === 0) {
        console.log([i]);
        console.log("FizzBuzz");
    }
    if (i % 3 === 0) {
        console.log([i]);
        console.log("Fizz");
    }
    if (i % 5 === 0) {
        console.log([i]);
        console.log("Buzz");
    } else {
        console.log([i]);
    }
}

/ Prime Checker: SOLUTION
// =======================
// Declare our primeCheck function


function primeCheck(number) {
    var number = 100;
    // Loop to check to see if a number has divisors other than one and itself.
    // Note: Loops from two to one less than the number we're checking.
    for (var i = 2; i < number; i++) {
        // If the number is evenly divisible
        // by a number between two and one less than itself,
        // then it is not prime.
        if (number % i === 0) {
            // So return false.
            return false;
        }
    }
    // A prime number has to be greater than one,
    // even if it has a divisor other than one and itself.
    return number > 1;
}


function primeCheck(number) {
    var number = 6;
    for (var i = 2; i < number; i++) {
        if (number % i === 0);
        return false;
    } {
        return number > 1;
    }
}

// Pseudo code for file filter
//  loope through the array
// for each file split at . using .split(".")
// loop through array of array to see if index[1] matches file type and push to array for each file type

var videoFiles = [];
var imageFiles = [];

var files = ["pavans_first_birthday.mov",
    "owens_asleep_at_the_computer.jpg",
    "michael_fights_a_polar_bear.mp4",
    "nate_road_rage.avi",
    "ruby_skydiving.jpeg",
    "ken_getting_his_black_belt.png",
    "dan_winning_underground_street_race.mov",
    "its_hard_to_come_up_with_file_names.gif",
    "seriously_this_is_taking_too_long.mpg",
    "i_wonder_how_many_of_these_i_should_have.png",
    "probably_a_few_more.avi",
    "nutmeg_is_clawing_my_sneakers_again.mp4",
    "cat_i_will_destroy_you.gif",
    "i_wish_we_had_a_dog.jpeg",
    "stop_looking_at_me_like_that_nutmeg.mpeg",
    "aww_i_cant_hate_you.png",
    "omg_my_sneakers.avi",
    "cat_you_are_the_worst.mp4"
];


var sort = function() {
    for (var i = 0; i < files.length; i++) {
        var split = files[i].split(".").pop();
        if (split === "jpg" || split === "jpeg" || split === "gif" || split === "png"){
          imageFiles.push(files[i]);
        } else {
          videoFiles.push(files[i]);
        }
    }
    console.log(imageFiles);
    console.log(videoFiles);
}
