document.querySelector('.switch').addEventListener('click',haveclicked);

function haveclicked() {
 let dark = document.querySelector('.dark')
 let light = document.querySelector('.switch');
 let status = document.querySelector('.status')

 light.classList.toggle('on');
 light.classList.toggle('off');

 if (light.classList.contains('off'))
	status.innerHTML = "lights out"


 else if (light.classList.contains('on'))
	status.innerHTML = "its bright"

}
