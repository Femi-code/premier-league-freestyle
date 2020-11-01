
/*--================DROPDOWN-MENU-=================--*/
const dropDown = document.getElementById('drop-down');
const dropMenu = document.querySelector('.drop-menu');

dropDown.addEventListener('click', function(){
	dropMenu.classList.toggle('show');
})


/*--=================SCROLL=====================--*/
const navBar = document.querySelector('.navbar');
window.addEventListener('scroll', function(){
	const scrollHeight = window.pageYOffset;
	const navHeight = navBar.getBoundingClientRect().height;
	if(scrollHeight > 50){
		navBar.classList.add('fixed-nav');
	}
	else{
		navBar.classList.remove('fixed-nav');
	}
})

/*--==============MAV-TOGGLER=======================--*/
const mobileNavs = document.querySelector('.mobile-navs');
const navToggler = document.querySelector('.nav-toggler');

navToggler.addEventListener('click', function(){
	mobileNavs.classList.toggle('full-nav');
})





/*--============TABS===========================*/
const btns = document.querySelectorAll('.tab-btn');
const hambuggerMenu = document.querySelector('.hambugger-menu');
const contents = document.querySelectorAll('.content');

hambuggerMenu.addEventListener('click', function(e){
	const id = e.target.dataset.id;
	if(id){
		btns.forEach(function(btn){
			btn.classList.remove('active');
			e.target.classList.add('active');
		});
		contents.forEach(function(content){
			content.classList.remove('active');
			const element = document.getElementById(id);
			element.classList.add('active');
		})
	}
});





