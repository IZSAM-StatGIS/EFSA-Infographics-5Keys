/*
 * This JavaScript doesn't do anything. The file exists just to demonstrate
 * including static assets from the HTML in themes.
 */

const bodyEl = document.body;
const html = document.documentElement;

bodyEl.onload = function() {
  bodyEl.classList.add("loaded");
}

function showModal(elem) {
  var keyNumber = elem.parentNode.id;
  var card = document.querySelector('#'+keyNumber);
  //Get card contents
  var title = card.querySelector('.card-title');
  var titleValue = title.innerHTML;
  var visual = card.querySelector('.visual');
  var visualSrc = visual.getElementsByTagName("img")[0].src;
  var visualAlt = visual.getElementsByTagName("img")[0].alt;
  var content = card.querySelector('.content');
  var contentValue = content.innerHTML;
  //Set modal contents
  var modal = document.querySelector('.modal');
  var modalVisual = document.querySelector('.modal-visual');
  var modalTitle = document.querySelector('.modal-title');
  var modalContent = document.querySelector('.modal-content');
  modalVisual.getElementsByTagName("img")[0].src = visualSrc;
  modalVisual.getElementsByTagName("img")[0].alt = visualAlt;
  modalTitle.innerHTML = titleValue;
  modalContent.innerHTML = contentValue;
  //Set styles
  modal.id = "modal-"+keyNumber;
  bodyEl.classList.add("show-modal");
}

function closeModal(elem) {
  bodyEl.classList.remove("show-modal");
}
