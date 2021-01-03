import React from 'react';
import './drag.css';

// dragElement = (elmnt) => {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "drag-img")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "drag-img").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }

// dragMouseDown = (e) => {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

// elementDrag = (e) => {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

// closeDragElement = () => {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }

class Drag extends React.Component {



  render() {
    return (
      <div className='drag-div'>
        <img id='drag-img1' src='https://opengameart.org/sites/default/files/tree_1.gif' />
        <img id='drag-img2' src='https://opengameart.org/sites/default/files/tree_1.gif' />
        <img id='drag-img3' src='https://opengameart.org/sites/default/files/tree_1.gif' />
        {/* {dragElement(document.getElementById('drag-div'))}; */}
      </div>
    )
  }
}

export default Drag;