// "use strict";
const $div = document.querySelector('.div')


async function fn(params) {
  let response = await fetch("https://jsonplaceholder.typicode.com/comments");
  // console.log(response);
  if (!response.ok) { console.log( new Error() )} 
  
  let json = await response.json();
  
  return json;
}

fn()
.then(date=>{
  // console.log( date );
})


// fetch("https://jsonplaceholder.typicode.com/comments")
//   .then(date=>date.json())
//   .then(console.log)







// const result = document.querySelectorOne("id=table");


let a ={
  e:[],
  o:[],
}

delete a.o

console.log( 1%2 );