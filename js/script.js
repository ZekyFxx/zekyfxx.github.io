"use strict"

var btn = document.getElementById('toggler');

document.addEventListener('DOMContentLoaded',()=>{
	var toggler = localStorage.getItem('light');
	console.log(toggler)
	if(toggler==1)
	{
		document.body.classList.add('toggle');
		btn.innerHTML = `<i class="bx bx-moon" ></i>`	
				
	}
	else
	{
		document.body.classList.remove('toggle');
		localStorage.setItem('light', 0);
		btn.innerHTML = `<i class="bx bx-sun"></i>`;
	}
});

btn.addEventListener('click',()=>{
	if(localStorage.getItem('light')==1)
	{
		document.body.classList.toggle('toggle');
		localStorage.setItem('light',0);
		btn.innerHTML = '<i class="bx bx-sun"></i>'	
	}
	else
	{
		document.body.classList.toggle('toggle');
		localStorage.setItem('light', 1);
		btn.innerHTML = '<i class="bx bx-moon" ></i>'	
	}

});