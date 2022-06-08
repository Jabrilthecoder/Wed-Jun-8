'use strict';

const booking = [];


const creatBooking = function(flightNum, numPassengers = 398, price = 2986) {


    
numPassengers = numPassengers || 1;

    const booking = {
    flightNum, 
    numPassengers,
    price
}

console.log(booking);
booking.push(booking);


}

createBooking('DAL1881');
createBooking('DAL1881', 523);
createBooking('DAL1881', 2 );
createBooking('DAL1881', 5 );
  
createBooking('DAL1881', underfined,  1000 );

//129


const flight = 'DAL1881'
const Jabril = {

name: 'Jabril Abdilahi',
passport: 24522456798765
}

const checkIn = function(flightNum, passenger){
flightNum = 'DAL 1787';
passenger.name = 'Mr.' + passenger.name;

if(passenger.passport === 24522456798765) {
    alert
}else ('WRONG PASSPORT!!!')
};
checkIng(flight, Jabril);
console.log(flight);
console.log(Jabril);


//flightNum = flight;
const flightNum = flight;
const passenger = Jabril

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() = 100000000000);

};

newPassport(Jabril);
checkIng(flight, Jabril);

//131


const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();

}

const upperFirstWord = function(str) {

    const [first, ...others] = str.split ('');
    return [first.toUpperCase(), ...others].join('');

};

const transformer = function(str, fn) {
console.log(`Original string: ${str}`);
console.log(`Transformed string: ${fn}`)

console.log(`transformed by: ${fn.name}`)
}

transformer('Jabril loves chicken', upperFirstWord);

const high5 = function() {

console.log('fire');


}

document.body.addEventListener('click', high5f);

['Jabril','jazmine','martha','mustafa'].forEach(high5);

//132

const greet = function(greeting)
{
    return function(name)
    {console.log(`${greeting} ${name}`);}
}

const greeterHey = greet('Hey');
greeterHey('Jabril');
greeterHey('Ethan');

greet('Hello')('Jabril');

  const greetArr = greeting => name => console.log(`${greeting} ${name}`);

  greetArr ('What is up')('Jabril');


  const KLM = {
      airline: 'K.L.M',
      iataCode: 'KL',
      booking: [],
    
book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline}`);

this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})

},
  };


  KLM.book(428, 'Jabril Abdilahi');
  KLM.book(530,'Ethan Tingea');
console.log(KLM)
  const AmericanAirlines = {

name: 'American Airlines',
iataCode: 'AA',
bookings: [],
  };

  const book = KLM.book;

  book(23, 'Jayden Annunda');

   book.call(AmericanAirlines, 23, 'Jayden Annunda');
   console.log(AmericanAirlines);

   book.call(KLM, 428, 'Khaild Haji');
   console.log(KLM);

   const Delta = {

    name: 'Delta',
    iataCode: 'DL',
    bookings: [],
      };

      book.call(Delta, 583, 'Khaild Haji');

      const flightData = [583, 'Shaub Adam'];
      book.apply(Delta, flightData);
      console.log(Delta);

      book.call(Delta, ...flightData);
      
    