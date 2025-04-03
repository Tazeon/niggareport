// import {add ,greet, person, td} from './module.js';

// console.log(add(5,20));
// console.log(greet());
// console.log(name);
// console.log(person);
// console.log(td);

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok){
            throw new Error("Network response was not ok")
        }
    });
