//JavaScript Document


//name of the JSON file that we want 
let url = 'https://msotera.github.io/module4/';

//assign variables selector tasks
let itemChoose = document.querySelector('select');
let reviewDisplay = document.querySelector('p');


itemChoose.onchange = function() {
    let item = itemChoose.value;
    updateDisplay(item);
};
//function updateDisplay is changing the name of the list item in the dropdown menu to match the name of the file containing its information
function updateDisplay(item) {
    item = item.replace(' ', '');
    item = item.toLowerCase();
    let url = item + '.txt';

    //fetch text file from url and display content held within
    fetch(url).then(function(response) {
        response.text().then(function(text) {
            reviewDisplay.textContent = text;
        });
    });
}

//update display for item in dropdown menu
updateDisplay('Item 1');
itemChoose.value = 'Item 1';




//name of the JSON file that we want 
let requestURL = 'https://msotera.github.io/module4/items.json';


//instead of XMLHTTPRequest, we'll use Fetch API which is a more modern way that uses promises 
let weirdItems = fetch('https://msotera.github.io/module4/items.json')
    .then(function(response) {
        //get the response 
        return response.json();

    }).then(function catItems(jsonObj) {


        let catItems = jsonObj.catItems;
        let section = document.querySelector('section');
        for (let i = 0; i < catItems.length; i++) {
            //build HTML elements
            let article = document.createElement('article');
            let h2 = document.createElement('h2');
            let img = document.createElement('img');
            let p1 = document.createElement('p');
            let ul = document.createElement('ul');



            img.setAttribute('src', 'https://msotera.github.io/module4/img/' + catItems[i].image);
            img.setAttribute('alt', catItems[i].image);
            h2.textContent = catItems[i].name;
            p1.textContent = 'Price ' + catItems[i].price;



            let details = catItems[i].details;
            for (let j = 0; j < details.length; j++) {
                let listItem = document.createElement('li');
                listItem.textContent = details[j];
                ul.appendChild(listItem);
            }



            article.appendChild(img);
            article.appendChild(h2);
            article.appendChild(p1);
            article.appendChild(ul);
            section.appendChild(article);


        }
    });