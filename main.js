document.addEventListener("DOMContentLoaded", function() {

	const circulo = document.querySelector('.circulo')
	const container = document.querySelector('.container')

	document.addEventListener('keydown', function (event) {
		const codigo = event.keyCode
		if (codigo===37) {							// IZQUIERDA
			let movx = 0
			const diametro = circulo.offsetWidth
			const ancho = container.offsetWidth
			movx = ancho/diametro
			const izq = circulo.offsetLeft
			const valor = izq - movx
			if (izq>=movx) {
				circulo.style.left = valor + 'px'
			}
		}
		if (codigo===38) {							// ARRIBA
			let movy = 0
			const diametro = circulo.offsetWidth
			const alto = container.offsetHeight
			movy = alto/diametro
			const arriba = circulo.offsetTop
			const valor = arriba - movy
			if (arriba>=movy) {
				circulo.style.top = valor + 'px'
			}else{
				circulo.style.top= '0px'
			}
		}
		if (codigo===39) {							// DERECHA
			let movx = 0
			const diametro = circulo.offsetWidth
			const ancho = container.offsetWidth
			movx = ancho/diametro
			const izq = circulo.offsetLeft
			const valor = izq + movx
			if (valor<ancho - diametro-movx) {
				circulo.style.left = valor + 'px'
			}
		}
		if (codigo===40) {							// ABAJO
			let movy = 0
			const diametro = circulo.offsetWidth
			const alto = container.offsetHeight
			movy = alto/diametro
			const arriba = circulo.offsetTop
			const valor = arriba + movy
			if (arriba<alto - diametro - 24 - movy) {
				circulo.style.top = valor + 'px'
			}else{
				circulo.style.top = alto - diametro - 24 + 'px'
			}
		}
	})
})