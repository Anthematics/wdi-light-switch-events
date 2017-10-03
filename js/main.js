
document.querySelector('.switch').addEventListener('click',haveclicked);

function haveclicked() {
 let light = document.querySelector('.switch');
 light.classList.toggle('on');
 light.classList.toggle('off');
}
