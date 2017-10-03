document.querySelector('.switch').addEventListener('click',haveclicked);

function haveclicked() {
 let body = document.querySelector('body')
 let switch2 = document.querySelector('.switch');
 let status = document.querySelector('.status')

//if toggled off -> do this

 if (switch2.classList.toggle('off')) {
	status.innerHTML = "lights out"
	body.className = 'dark'
	}

// if toggled on -> do this.
 else if (switch2.classList.contains('on')) {
	status.innerHTML = "It's bright"
	body.className = 'light'
	}
}
