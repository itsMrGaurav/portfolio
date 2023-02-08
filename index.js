
let boxes = Array.from(document.getElementsByClassName("box"));

function checkOverflow(el)
{
   var curOverflow = el.style.overflow;

   if ( !curOverflow || curOverflow === "visible" )
      el.style.overflow = "hidden";

   var isOverflowing = el.clientWidth < el.scrollWidth 
      || el.clientHeight < el.scrollHeight;

   el.style.overflow = curOverflow;

   return isOverflowing;
}

let overflowingBoxes = boxes.filter(ele => !(checkOverflow(ele)));

overflowingBoxes.forEach(ele => {
      ele.classList.remove("scr");
})