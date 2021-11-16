// let f1 = document.querySelector('#form');


let f1 = document.querySelectorAll('#form >input');
let obj = {}

const radioInCheckbox =(type)=>{
  ["checkbox", "radio"].includes(type);
}
// f1.forEach((i)=>{
  //   const {name,value,type,checked} = i
  
  //   obj[name]=radioInCheckbox(type) ? checked :  value;
// })
// console.log(obj);





const forms = document.forms.person
const f = document.querySelector('#form');





forms.onsubmit = (e) => {
  e.preventDefault();
  

  
  const formValue = new FormData(f)
  for (const i of formValue) {
    let [key,value]=i;
    console.log( key,value );
  }
  
  // console.log(
  //   [...formValue]
  //   );
  

};

