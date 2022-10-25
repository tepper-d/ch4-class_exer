/*
CIS 124: Introduction to JavaScript
Chapter 4 Class Exercises
Dominique Tepper, 24OCT2022

    2.1 Coding example using a Number, String and Date method (one of each object)
    2.2 Coding example using a Function - create a standard function with no parameters, does not return a value
    2.3 Coding example using a Function - which returns a value
    2.4 Rewrite the above Function using an arrow function
    2.5 Instantiate a simple Object with properties and methods

Tables Reference: https://www.fwait.com/how-to-create-table-from-an-array-of-objects-in-javascript/
Car Data: https://cars.usnews.com/cars-trucks/advice/cars-with-the-best-gas-mileage
*/

// 2.1 Number
const venza = 39;
const escape = 41;
//

let toyota = ["Venza", "RAV4 Hybrid", "Avalon Hybrid", "Camry Hybrid", "Prius"]
let ford = ["Escape Hybrid"]
let lexus = ["ES Hybrid"]
let Hyundai = ["Sonata Hybrid", "Elantra", "Ioniq"]
let honda = ["Accord Hybrid", "Insight"]


/* let btnCars = document.querySelector("btn-cars");
let carsTable = document.querySelector('#table-cars');

let cars = [
    { make: 'Toyota', model: 'Venza', mpg: 39 },
    { make: 'Toyota', model: 'RAV4 Hybrid', mpg: 40 },
    { make: 'Ford', model: 'Escape Hybrid', mpg: 41 },
    { make: 'Lexus', model: 'UX 250h', mpg: 42 },
    { make: 'Toyota', model: 'Avalon Hybrid', mpg: 44 },
    { make: 'Lexus', model: 'ES Hybrid', mpg: 44 },
    { make: 'Honda', model: 'Accord Hybrid', mpg: 44},
    { make: 'Kia', model: 'Niro', mpg: 49 },
    { make: 'Hyundai', model: 'Sonata Hybrid', mpg: 52},
    { make: 'Toyota', model: 'Camry Hybrid', mpg: 52},
    { make: 'Honda', model: 'Insight', mpg: 52},
    { make: 'Hyundai', model: 'Elantra', mpg: 54},
    { make: 'Toyota', model: 'Prius', mpg: 56},
    { make: 'Hyundai', model: 'Ioniq', mpg: 59}
]

let headers = ["Make", "Model", "MPG"];

btn-cars.addEventListener('click', () => {
    let table = document.createElement('table-cars');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    cars.forEach(car => {
        let row = document.createElement('tr');

        Object.values(car).forEach(text => {
            let cell = document.createElement ('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })

        table.appendChild(row);
    });

    myTable.appendChild(table-cars);

}); */
