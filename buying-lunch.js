function whosPaying(names) {
  var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
  var numberOfPeople = names.length
  var randomwPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randonPerson = names[randomwPersonPosition];
  return randonPerson + " is going to buy lunch today!";
}