// import {add ,greet, person, td} from './module.js';

// console.log(add(5,20));
// console.log(greet());
// console.log(name);
// console.log(person);
// console.log(td);

function fetchAndDisplayUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok){
            throw new Error("Network response was not ok" + response.statusText);
        }
        return response.json(); 
    })
    .then(data => {
        console.log(data);
        const userContainer = document.getElementById("user-container");
        userContainer.innerHTML = ""; //All Clear existing content

        data.forEach(user => {
            const userDiv = document.createElement("div");
            userDiv.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email : </strong>${user.email}</p>
                <p><strong>Phone : </strong>${user.phone}</p>
                <p><strong>Web : </strong>${user.website}</p>
            `;

            userContainer.appendChild(userDiv);
        })
    })
    .catch(error => {
        console.error("There was a problem with fetch operation",error);
    });
}

fetchAndDisplayUsers();




