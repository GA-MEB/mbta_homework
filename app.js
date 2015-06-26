// MBTA HOMEWORK
// Create a representation of the MBTA, with multiple 'lines', in order to determine the number of 'stops' (in other words, the distance) between an origin and a destination, accounting for the possibility of transferring between different lines.

var red, orange, green;   // Three lines, all intersecting at Park

red = [
  "South Station",
  "Park Street",
  "Kendall",
  "Central",
  "Harvard",
  "Porter",
  "Davis",
  "Alewife"
];
orange = [
  "North Station",
  "Haymarket",
  "Park Street",
  "State",
  "Downtown Crossing",
  "Chinatown",
  "Back Bay",
  "Forest Hills"
];
green = [
  "Haymarket",
  "Government Center",
  "Park Street",
  "Boylston",
  "Arlington",
  "Copley"
];

var find = function(array, value){
  for (var i = 0; i < array.length; ++i) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};

var sameLineDistance = function(line, firstStop, secondStop){
  // Find the indices of firstStop and secondStop, and subtract them.
  // We only care about magnitude, not direction, so we'll take the absolute value.
  var diff = find(line, firstStop) - find(line, secondStop);
  if (diff < 0) {
    diff *= -1;
  }
  return diff;
  // Using a ternary operator
  // return (diff > 0)? diff : -diff;
};


var tester = function() {
  console.log('find');
  console.log("* should return 2, actually returns " + find(['a','b','c'], 'c'));
  console.log("* should return -1, actually returns " + find(['a','b','c'], 'z'));
  console.log('sameLineDistance');
  console.log('* should return 1, actually returns ' + sameLineDistance(red, "South Station", "Park Street"));
  console.log('* should return 4, actually returns ' + sameLineDistance(red, "Kendall", "Davis"));
  console.log('* should return 1, actually returns ' + sameLineDistance(orange, "Forest Hills", "Back Bay"));
  console.log('* should return 3, actually returns ' + sameLineDistance(orange, "State", "North Station"));
  console.log('* should return 1, actually returns ' + sameLineDistance(green, "Arlington", "Copley"));
  console.log('* should return 5, actually returns ' + sameLineDistance(green, "Copley", "Haymarket"));
}

tester();
