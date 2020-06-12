
function closeBurger()
{ 
  var burger = document.getElementById('burger');
   burger.checked = false;
};

function initBurger() {
  var myCloselinks = document.querySelectorAll('a.closeMenu')
  for (i = 0; i < myCloselinks.length; ++i) {
   myCloselinks[i].onclick = closeBurger;
 }
  
}

window.onload = initBurger;