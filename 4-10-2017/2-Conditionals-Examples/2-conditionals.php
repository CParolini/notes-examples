<?php

/* For JavaScript experts like yourselves, there's surprisingly little to say
 *   about PHP's conditional and comparison operators. They behave exactly as
 *   you'd expect. */
$name = 'Chris Parolini';

/* Note that braces aren't required around single-line if/else if/else
 * expressions. */
if (strlen($name) > 12){
  echo "'$name' is a long name.\n";
} else {
  echo "'$name' is a short name"
}

/* Defaulted to the same, but feel free to change either to change the way
 * the branches execute below. */
$your_birth_year = 1993;
$my_birth_year = 1993;

/* PHP share's JavaScript's peculiarity of having separate operators for
 * strict equality (===) and loose equality (==). Stick to === for now;
 * we'll revisit == later. */
if ($your_birth_year > $my_birth_year) {
  echo "You're younger than me.\n";
} else if ($your_birth_year === $my_birth_year) {
  echo "We're the same age!\n";
} else {
  echo "You're pretty old.\n";
}
