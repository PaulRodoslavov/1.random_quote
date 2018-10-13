// FSJS - Random Quote Generator

// Array of colors

const colorArray = ['tomato', 'green', 'orange', 'red', 'blue'];

// Array of quotes

const quotes = [
   {
      quote: "Don't cry because it's over, smile because it happened." ,
      source: 'Dr. Seuss',
      location: "USA",
      tags: "humor"
   },
   {
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      source: 'Albert Einstein',
      citation: 'twitter (^_^)',
      location: "Germany",
      tags: "humor"
   },
   {
      quote: 'Be yourself; everyone else is already taken.',
      source: 'Oscar Wilde',
      year: '1880',
      citation: 'internet',
      location: "France",
      tags: "life"
   },
   {
      quote: "Without music, life would be a mistake.",
      source: 'Friedrich Nietzsche',
      citation: 'Twilight of the Idols',
      location: "Germany",
      tags: "life"
   },
   {
      quote: "A room without books is like a body without a soul.",
      source: 'Marcus Tullius Cicero',
      year: '63 BC',
      citation: 'Catiline Orations',
      location: "Italy",
      tags: "life"
   }
];

// Function for random number

function getRandomQuote (arr){
   return arr[Math.floor(Math.random() * quotes.length)]
};

// Function for printout elements

function printQuote () {
   const quoteBox = document.querySelector('#quote-box');
   const randomQuote = getRandomQuote(quotes);
   const randomColor = getRandomQuote(colorArray);
   const body = document.querySelector('body');

   const quote = `<p class="quote">${randomQuote.quote}</p>
   <p class="source">${randomQuote.source}</p>`

   quoteBox.innerHTML = quote;

   if(randomQuote.citation){
      const citation = `<span class="citation">${randomQuote.citation}</span>`
      document.querySelector('.source').innerHTML += citation;
   }
   if(randomQuote.year){
      const year = `<span class="year">${randomQuote.year}</span>`
      document.querySelector('.source').innerHTML += year;
   }
   if(randomQuote.location){
      const location = `<span>, ${randomQuote.location}</span>`
      document.querySelector('.source').innerHTML += location;
   }
   if(randomQuote.tags){
      const tags = `<span>, (${randomQuote.tags})</span>`
      document.querySelector('.source').innerHTML += tags;
   }

   // Changes background and button color

   body.style.backgroundColor = randomColor;
   loadQuote.style.backgroundColor = randomColor;
}

// Click event to change quote

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Function to auto change quotes

setInterval(() => { printQuote(); }, 5000);
