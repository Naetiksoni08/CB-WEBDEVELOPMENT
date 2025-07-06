const baseURL = "https://dummyjson.com"
const button = document.querySelector("button");
const userslist = document.querySelector(".users-list");

// function getUsers() {
//     userslist.innerText=""; 
//     fetch(`${baseURL}/users`)
//     .then(res => res.json())
//     .then(data => renderUserslist(data.users))
//     .catch(err => console.log(err));
// }

async function getUsers() {
    try {
      const res = await fetch(`${baseURL}/users`);
      const data = await res.json();
      renderUsersList(data.users);
    } catch (error) {
      console.log(error);
    }
  }


/*

  fetch(`${baseURL}/users`, {
    method: "POST",
    data: {
      "firstName": "Emily",
      "lastName": "Johnson",
      "maidenName": "Smith",
      "age": 28,
    },
    headers: {
      "req-from": "web",
      Authorization: ""
    },
  }).then(res => res.json())
    .then(data => renderUsersList(data.users))
    .catch(err => console.log(err))
*/

function renderUserslist(users) {
    users.forEach(user => {
        const ol = document.createElement("ol");
        ol.innerText = `${user.firstName} ${user.lastName}`
            userslist.append(ol);
        
    });
}


button .addEventListener('click',()=> {
    getUsers();
});



