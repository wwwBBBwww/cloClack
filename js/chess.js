(function dom() {
  const $div = document.querySelector(".chess");
  const matrix = Array(8).fill(Array(8).fill(0));
  const $array = [];
  let m =0;


  const domContent = (i,j) => {
    const $elm = document.createElement("DIV");
    $elm.dataset.x = i;
    $elm.dataset.y = j;
    if (m%2===0) {$elm.classList.add("chess-black"); }
      else{ $elm.classList.add("chess-white");}
    $array.push($elm)
  };


for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
      domContent(i,j);
      m++
  }
  m++
}


const coordinates = (target)=>{
  return {
    x: Number(target.dataset.x),
    y: Number(target.dataset.y),
  };
}
const listener =(e)=>{
  if (e.target.closest('DIV')) {
    
    const $div = document.querySelectorAll(".chess-active");
    const $elm = document.querySelector(".active-target");
    if ($div.length) {
      for (const i of $div) {
        i.classList.remove("chess-active");
      }
      $elm.classList.remove("active-target");
    }
    
    e.target.classList.add('active-target')
    let {x,y}=coordinates(e.target);
    if (x+2<=7 && y+1<=7) {document.querySelector(`[data-x="${x+2}"][data-y="${y+1}"]`).classList.add("chess-active")}
    if (x+2<=7 && y-1>=0) {document.querySelector(`[data-x="${x+2}"][data-y="${y-1}"]`).classList.add("chess-active")}
    if (x-2>=0 && y+1<=7) {document.querySelector(`[data-x="${x-2}"][data-y="${y+1}"]`).classList.add("chess-active")}
    if (x-2>=0 && y-1>=0) {document.querySelector(`[data-x="${x-2}"][data-y="${y-1}"]`).classList.add("chess-active")}
    if (x-1>=0 && y+2<=7) {document.querySelector(`[data-x="${x-1}"][data-y="${y+2}"]`).classList.add("chess-active")}
    if (x+1<=7 && y+2<=7) {document.querySelector(`[data-x="${x+1}"][data-y="${y+2}"]`).classList.add("chess-active")}
    if (x+1<=7 && y-2>=0) {document.querySelector(`[data-x="${x+1}"][data-y="${y-2}"]`).classList.add("chess-active")}
    if (x-1>=0 && y-2>=0) {document.querySelector(`[data-x="${x-1}"][data-y="${y-2}"]`).classList.add("chess-active")}
  }
}

$div.addEventListener('click',listener)
  $div.append(...$array);
}())