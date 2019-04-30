// (function () {

nameForm = document.querySelector('#name'),
dataWrapper = document.querySelector('.quote'),
userInput = document.querySelector('#yourname'),
proxy = 'http://cors-anywhere.herokuapp.com/',


// const getQuote = event => {

//   // this if statement allows us to call the action without submitting the form
//   if (event) {
//      // Keep the form from refreshing the page if called from a submit
//      event.preventDefault();
//   }


  fetch(`${proxy}http://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${name.value}`)
  .then(function(response) {
    return response.json();
  })
  .then(data => {
    console.log(data);
    let formattedData = '';

    if (data.name) {
    
     }
     formattedData += `${data.message}`;

     dataWrapper.innerHTML = formattedData;



//    if (nameForm) {
//     nameForm.addEventListener('submit', getQuote);
//  }

    
  });