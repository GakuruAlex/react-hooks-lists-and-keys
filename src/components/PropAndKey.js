import React from 'react';

const users = [
  { id: 1, firstName: "Duane", lastName: "Watson" },
  { id: 2, firstName: "Jane", lastName: "Johnson" },
{id: 3, firstName:`Alex`,lastName:`Johnson`},
];


function PropAndKey(){


const userHeadings = users.map((user) => {
  return <h1 key={user.id}>{user.firstName}</h1>;
});

return userHeadings;

}


export default PropAndKey;