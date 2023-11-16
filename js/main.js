var id = document.getElementById('menu')
var nav__links = document.querySelector(".nav__links")
var nav = document.querySelector(".nav")
var list = nav__links.classList;
var nav__class = nav.classList;
id.addEventListener("click", () => {
	console.log("click")
	list.toggle("show")
	nav__class.toggle("show")

})