document.addEventListener("DOMContentLoaded", function() {

	// ------------ VARIABLES ----------------//

	const up = document.querySelector('.up')
	const left = document.querySelector('.left')
	const down = document.querySelector('.down')
	const right = document.querySelector('.right')
	const circulo = document.querySelector('.circulo')
	const container = document.querySelector('.container')
	const rojo = document.querySelector('.rojo')
	const azul = document.querySelector('.azul')
	const verde = document.querySelector('.verde')


	circulo.style.left = circulo.offsetLeft + 'px'
	circulo.style.top= circulo.offsetTop + 'px'

	const movement = 50

	// ------------ EVENTOS ----------------//

	left.addEventListener('click', function(){
		moverIzquierda()
		clearInterval(alea)
	})
	right.addEventListener('click', function(){
		moverDerecha()
		clearInterval(alea)
	})
	down.addEventListener('click', function(){
		moverAbajo()
		clearInterval(alea)
	})
	up.addEventListener('click', function(){
		moverArriba()
		clearInterval(alea)
	})

	document.addEventListener('keydown', function (event) {
		clearInterval(alea)
		const codigo = event.keyCode
		if (codigo===37) {							// IZQUIERDA
			moverIzquierda()
		}
		if (codigo===38) {							// ARRIBA
			moverArriba()
		}
		if (codigo===39) {							// DERECHA
			moverDerecha()
		}
		if (codigo===40) {							// ABAJO
			moverAbajo()
		}
	})
	document.addEventListener('keydown', function (event) {
		clearInterval(alea)
		const codigo = event.keyCode
		if (codigo===32) {
			aleatorio()
		}
	})
	document.addEventListener('keydown', function (event) {
		clearInterval(alea)
		const codigo = event.keyCode
		if (codigo===13) {
			alea = setInterval(aleatorio,500)
		}
	})

	rojo.addEventListener('click', function(){
		cambiarColor('red')
	})
	verde.addEventListener('click', function(){
		cambiarColor('green')
	})
	azul.addEventListener('click', function(){
		cambiarColor('blue')
	})

	// ------------ FUNCIONES ----------------//

	let alea = setInterval(aleatorio,500)			// FUNCION INICIAL (ALEATORIO)

	function aleatorio(){
		const random = Math.floor(Math.random() * 4)
		if (random === 0) {
			moverIzquierda()
		}
		if (random === 1) {
			moverDerecha()
		}
		if (random === 2) {
			moverAbajo()
		}
		if (random === 3) {
			moverArriba()
		}
		colorAleatorio()
	}

	function moverIzquierda(){
		const izq = circulo.offsetLeft
		if (izq>movement) {
			circulo.style.left = izq - movement + 'px'
		}else{
			circulo.style.left= '0px'
		}
	}

	function moverArriba(){
		const arriba = circulo.offsetTop
		if (arriba>movement) {
			circulo.style.top = arriba - movement + 'px'
		}else{
			circulo.style.top= '0px'
		}
	}

	function moverDerecha(){
		const ancho = container.offsetWidth
		const diametro = circulo.offsetWidth
		const der = circulo.offsetLeft
		if (der+diametro+movement+24<ancho) {
			circulo.style.left = der + movement + 'px'
		}else{
			circulo.style.left = ancho - diametro - 24 + 'px'
		}
	}

	function moverAbajo(){
		const diametro = circulo.offsetWidth
		const alto = container.offsetHeight
		const arriba = circulo.offsetTop
		if (arriba+diametro+movement+24<alto) {
			circulo.style.top = arriba + movement + 'px'
		}else{
			circulo.style.top = alto - diametro - 24 + 'px'
		}
	}
	function cambiarColor(color){
		circulo.style.background = color
	}
	function colorAleatorio(){
		const random = Math.floor(Math.random() * 3)
		if (random === 0) {
			cambiarColor('red')
		}
		if (random === 1) {
			cambiarColor('blue')
		}
		if (random === 2) {
			cambiarColor('green')
		}
	}
})