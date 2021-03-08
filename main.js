// Scrivi un programma che stampi i numeri da 1 a 100
// I multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

for (var i = 1; i <= 100; i++) {
  if (i %3 == 0 && i %5 == 0) {
    console.log("FizzBuzz");
    fizzbuzz = "FizzBuzz";
      document.getElementById('fizzbuzz').innerHTML += "<li>" + fizzbuzz + "</li>";
  } else if (i %5 == 0) {
    buzz = "Buzz"
      document.getElementById('fizzbuzz').innerHTML += "<li>" + buzz + "</li>";
  } else if (i %3 == 0) {
    fizz = "Fizz";
      document.getElementById('fizzbuzz').innerHTML += "<li>" + fizz + "</li>";
  } else {
      document.getElementById('fizzbuzz').innerHTML += "<li>" + i + "</li>";
  }
}
