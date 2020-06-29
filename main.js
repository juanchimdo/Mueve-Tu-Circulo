document.addEventListener("DOMContentLoaded", function() {

	const circulo = document.querySelector('.circulo')
	const container = document.querySelector('.container')

	function aleatorio(){
		const random = Math.floor(Math.random() * 3)
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
	}

	setInterval(aleatorio,1000)

	document.addEventListener('keydown', function (event) {
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

	function moverIzquierda(){
		const diametro = circulo.offsetWidth
		const ancho = container.offsetWidth
		const movx = ancho/diametro
		const izq = circulo.offsetLeft
		const valor = izq - movx
		if (izq>=movx) {
			circulo.style.left = valor + 'px'
		}
	}

	function moverArriba(){
		const diametro = circulo.offsetWidth
		const alto = container.offsetHeight
		const movy = alto/diametro
		const arriba = circulo.offsetTop
		const valor = arriba - movy
		if (arriba>=movy) {
			circulo.style.top = valor + 'px'
		}else{
			circulo.style.top= '0px'
		}
	}

	function moverDerecha(){
		const diametro = circulo.offsetWidth
		const ancho = container.offsetWidth
		const movx = ancho/diametro
		const izq = circulo.offsetLeft
		const valor = izq + movx
		if (valor<ancho - diametro-movx) {
			circulo.style.left = valor + 'px'
		}
	}

	function moverAbajo(){
		const diametro = circulo.offsetWidth
		const alto = container.offsetHeight
		const movy = alto/diametro
		const arriba = circulo.offsetTop
		const valor = arriba + movy
		if (arriba<alto - diametro - 24 - movy) {
			circulo.style.top = valor + 'px'
		}else{
			circulo.style.top = alto - diametro - 24 + 'px'
		}
	}
})