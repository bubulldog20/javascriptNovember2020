const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';  //declaring a variable to connect to the API for the New York Time Article search
const key = 'VZ8sBqNp92BwfFczpNNruf7m18OJteGC';   //this is our personal API key from that website that allows us to access the API
let url;   //declare variable that first shows up in the fetch results function


//SEARCH FORM
const searchTerm = document.querySelector('.search');  // declaring a variable referencing the first instance of search classes in our html
const startDate = document.querySelector('.start-date');  //referencing the first instance of search classes in our html
const endDate = document.querySelector('.end-date');  //referencing the first instance of search classes in our html
const searchForm = document.querySelector('form');  //referencing the first instance of search classes in our html
const submitBtn = document.querySelector('.submit');  //referencing the first instance of search classes in our html

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');  //referencing the first instance of result classes in our html
const previousBtn = document.querySelector('.prev');  //referencing the first instance of the result classes in our html
const nav = document.querySelector('nav');  //referencing the first instance of the nav element in our html

let pageNumber = 0;  //declaring the variable and assigning as 0
console.log('PageNumber:', pageNumber);  //shows what page we're on in the console
//  let displayNav = false;  //declaring a variable as a boolean to begin with but doesn't show up in this module!!!

//RESULTS SECTION
const section = document.querySelector('section');  //referencing the first instance of the section element in our html

nav.style.display = 'none';  //before we hit search the Previous and Next don't show up
 
searchForm.addEventListener('submit', fetchResults);  //waiting (listening) for user interaction via the keyboard, mouse, etc.  
nextBtn.addEventListener('click', nextPage);  //we use submit above because we're sending the request for info (from the client to the server?)
previousBtn.addEventListener('click', previousPage); //we use click when we just want to perform an action without sending a request (only works on the client?)

function fetchResults(e) {  //declaring a function to fetch results of our search, the "e" or whatever we call it is our total search results
    e.preventDefault();  //cancels any default action that would normally occur, stops the page from reloading with the previous results, necessary for all form submit situations ??
    //https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

    // Assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //info is in the NYT API documentation on how to set this up, could be specific to just this API
    console.log("URL:", url); 

    if(startDate.value !== '') {  //it will work whether there is input or not, but the start and end dates limit the amount of data returned
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value; //this has to be below our code to find the url, and we are adding the begin date to the search parameters based on the value from the input
    };
  
    if(endDate.value !== '') {
        url += '&end_date=' + endDate.value;
    };
//https://developer.nytimes.com/docs/articlesearch-product/1/overview
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

    fetch(url)   //creating a method to go get the results of our search from the API, to get the promise and response
        .then(function(result) {  //.then creates a Promise containing a result object
        console.log(result)
        return result.json();  //taking the response and turning it into a json object
    })  .then(function(json) {
        displayResults(json); //shows us the actual articles on the page once all of them are found ??
    });
}

function displayResults(json) {  //creating a function to display the results from the fetch(url) ??
    let articles = json.response.docs;  //declaring a variable with the value of the DOCS that were found in the RESPONSE from the API wi

    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    if(articles.length >= 10) {
        nav.style.display = 'block'; //shows the nav display if 10 items are in the array
      } else {
        nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
      }
    
    if(articles.length === 0) {
        console.log("No results");
      } else {
        for(let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');  
            let clearfix = document.createElement('div');

            let current = articles[i]; //current is an index at that position
            console.log("Current:", current); //creates link to current article seeing/referencing

            link.href = current.web_url;  //
            link.textContent = current.headline.main; 

            para.textContent = 'Keywords: '; 

            for(let j = 0; j < current.keywords.length; j++) {
              let span = document.createElement('span');   
              span.textContent += current.keywords[j].value + ' ';   
              para.appendChild(span);
            }

    
            if(current.multimedia.length > 0) {
            img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;                           
            img.alt = current.headline.main;
            }

      
            clearfix.setAttribute('class','clearfix');
      
            
            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img); 
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
      }
      
};

function nextPage(e) {
    pageNumber++; 
    fetchResults(e);  
    console.log("Page number:", pageNumber);
};

 function previousPage(e) {
    if(pageNumber > 0) {
      pageNumber--;
    } else {
      return;
    }
    fetchResults(e);
    console.log("Page:", pageNumber);
};
    
 