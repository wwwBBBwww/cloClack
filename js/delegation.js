(function delegation() {
  const $ul = document.querySelector(".list");
  const $li = document.querySelector(".list__item");
  
  
  const obj = {
    open(){console.log( 1 )},
    close(){console.log( 2 );}
  }
  
const handler = (event)=>{

  if (event.target.closest(".list__item")==null) {return};
  const options = event.target.dataset.options;
  if (options && obj[options] !== undefined) {
    obj[options]();
  }

  // $ul.removeEventListener("click", handler);
}








$ul.addEventListener("click", handler, { once: true });
}())

