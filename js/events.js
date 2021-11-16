(function (params) {
  const $list = document.querySelector(".list");
  const $listItem = document.querySelector(".list__item");




  const $elm = document.createElement("DIV");
  $elm.className = "bgEvent";

  const handlerOver = (e) => {
    if (e.target.closest("LI")) {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      $elm.style.cssText = `
      width:${width}px;height:${height}px;
      top:${top + window.pageYOffset}px;left:${left}px;`;
    }
    else{$elm.style.cssText = ``;}
  };

  const handlerOut = (e) => {
    // if (e.relatedTarget.tagName !="BODY" ) {  return; }
    console.log(e.target.tagName);
    console.log(e.relatedTarget.tagName );
    if (e.relatedTarget.tagName=="BODY") {
      // const { left, top, width, height } = e.target.getBoundingClientRect();
      $elm.style.cssText = ``;
      // width:${0}px;height:${0}px;
      // top:${top + window.pageYOffset}px;left:${left}px;`;
    }
  };

  $list.addEventListener("mouseover", handlerOver);
  // $list.addEventListener("mouseout", handlerOut);

  document.body.append($elm);

}())
