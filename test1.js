document.addEventListener("mousedown", function (event) {
  let dragElement = event.target.closest(".draggable");
  if (!dragElement) return;
  //   event.preventDefault();
  let shiftX, shiftY;

  startDrag(event.clientX, event.clientY);
  document.addEventListener("mousemove", onMouseMove);
  dragElement.onmouseup = function () {
    finishDrag();
  };

  function onMouseMove(event) {
    moveAt(event.clientX, event.clientY);
  }

  function startDrag(clientX, clientY) {
    shiftX = clientX - dragElement.getBoundingClientRect().left;
    shiftY = clientY - dragElement.getBoundingClientRect().top;
    dragElement.style.position = "fixed";
    document.body.append(dragElement);
    moveAt(clientX, clientY);
  }

  function finishDrag() {
    dragElement.style.top = parseInt(dragElement.style.top) + scrollY + "px";
    dragElement.style.position = "absolute";

    document.removeEventListener("mousemove", onMouseMove);
    dragElement.onmouseup = null;
  }

  function moveAt(clientX, clientY) {
    let newX = clientX - shiftX;
    let newY = clientY - shiftY;
    dragElement.style.left = newX + "px";
    dragElement.style.top = newY + "px";
  }
});
