

const div = document.querySelector(".div");
// function request(params) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/comments");
//     xhr.send();
//     xhr.onload = () => {
//         resolve(xhr.response);
//     }
//   });
// }
// request()
// .then(i=>{
//   let j = 0;
//     for (let key of JSON.parse(i)) {
//       j++
//       setTimeout(()=>{
//         div.innerHTML += key.email + "<br> ";
//       },j*1000)
//     }
// })




// const $div = document.querySelector('.div')

const delay = (ms)=>{
return new Promise(r=>{
  setTimeout(() =>{r(22);$div.innerHTML = `two Seconds`},ms);
}).then(()=>{
  setTimeout(() =>{$div.innerHTML = ``},1000)
    }
  )
}

async function promise(params) {
  try {
    await delay(2000)
    const str = await fetch("https://jsonplaceholder.typicode.com/comments");
    const json = await str.json()
    let j = 0;
    for (let key of json) {
      j++;
      setTimeout(() => {
        $div.innerHTML += key.email + "<br> ";
      }, j * 1000);
    }
  } catch (err) {
    $div.innerHTML = `${err.name} </br> ${err.message}`;
  }

}


// promise();




// function fn(params) {
//   Promise.resolve().then(fn());
// }
// fn()



// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }


function clock() {
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();

  if (hours <= 9) hours = "0" + hours;
  if (minutes <= 9) minutes = "0" + minutes;
  if (seconds <= 9) seconds = "0" + seconds;

  let date = hours + " : " + minutes + " : " + seconds;

  let $div = document.getElementById("timer");
  $div.innerHTML = date;
  $div.style.background = "#" + hours + minutes + seconds;
  $div.style.display = `inline-block`;
  setTimeout(clock, 1000);
}

// clock();