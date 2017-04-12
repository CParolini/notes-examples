<?php

// PHP's associative arrays are just key-value maps.
//   They're a lot like JavaScript's objects:
$me_and_dad_in_law = [
  'Parolini' => 'Chris 29',
  'Fields' => 'Boone 70'
];

// Getting the value for a key is just like getting the value of a JavaScript
//   object's  property using bracket notation:
echo "My name is ". $me_and_dad_in_law["Parolini"] . ".\n";

echo str_repeat('=', 12) . "\n";

// Associative arrays also have a foreach, but you get access to the key and
//   value simultaneously. Much nicer than JavaScript object iteration.
foreach ($me_and_dad_in_law as $lastName => $nameAge) {
  echo "$lastName goes with $nameAge.\n";
}
