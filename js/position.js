(function (params) {
  const $box = document.querySelector(".box");
  const $elm = document.querySelector(".elm");

  const {top:t,left:l,width:w,height:h}=$box.getBoundingClientRect()
  const {top,left,width,height}=$elm.getBoundingClientRect()

const handler = (event)=>{
  const { pageX, pageY, clientX, clientY } = event;
  console.log(
    // event,
    // pageX,
    // clientX,
    // pageY,
    // clientY,
    // offsetY,
    // offsetX,
    // t,l,w,h,
    // top,left,width,height
  );
    setTimeout(()=>{
      $elm.style.cssText = `
      top:${window.pageYOffset + clientY - t - height / 2}px;
      left:${window.pageXOffset + clientX - l - width / 2}px;`;
    },10)
}


  $box.addEventListener('mousemove',handler)

})();


