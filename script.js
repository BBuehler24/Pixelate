const tableElement = document.querySelector('table');

let makeRow = () => {
    const myTr = document.createElement('tr');
    for (let i = 0; i < 20; i++) {
        const myTd = document.createElement('td')
        myTr.appendChild(myTd); // Syntax: parentElement.appendChild(newElement)
    }
    tableElement.appendChild(myTr);
}

makeRow();

const rowButton = document.getElementById('add-row');
rowButton.addEventListener('click', makeRow);

let colorize = (event) => { // Can change the appearance of the DOM by mutating the className property on the selected DOM node.
    // The "event" object above will allow access to the actual DOM node that was clicked (not necessarily the DOM node we've attached the event listener)
    const target = event.target // event.target is reference to the actual DOM node that was clicked.
    if (event.target.tagName = 'td') {
        if (target.className === selectedColor) { // if the clicked box's className = selectedColor
        target.className = ''; // will turn className to empty string = back to gray
        } else {
        target.className = selectedColor; // otherwise will turn to the currently selectedColor
        }
    }else {
        console.log('incorrect click!')
    }
}

tableElement.addEventListener('click', colorize);

// Now want the <select> element to have "change" listener that will adjust
// selected color when changed. 

let selectedColor = 'red'; //

const selectElement = document.querySelector('select');
selectElement.addEventListener('change', function (event) {
    console.log(event.target.value);
    selectedColor = event.target.value;
});

