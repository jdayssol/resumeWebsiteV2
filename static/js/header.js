
function closeBurger()
{ 
  var burger = document.getElementById('burger');
  console.log("Close Burger");
   burger.checked = false;
};

function initBurger() {
  var myCloselinks = document.querySelectorAll('a.closeMenu')
  console.log(myCloselinks)
  for (i = 0; i < myCloselinks.length; ++i) {
   console.log(myCloselinks[i])
   myCloselinks[i].onclick = closeBurger;
 }
  
}

window.onload= initBurger;