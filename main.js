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

	let d = 0

	// ------------ EVENTOS ----------------//

	// left.addEventListener('click', function(){
	// 	moverIzquierda()
	// 	clearInterval(alea)
	// })
	// right.addEventListener('click', function(){
	// 	moverDerecha()
	// 	clearInterval(alea)
	// })
	// down.addEventListener('click', function(){
	// 	moverAbajo()
	// 	clearInterval(alea)
	// })
	// up.addEventListener('click', function(){
	// 	moverArriba()
	// 	clearInterval(alea)
	// })

	// document.addEventListener('keydown', function (event) {
	// 	clearInterval(alea)
	// 	const codigo = event.keyCode
	// 	if (codigo===37) {							// IZQUIERDA
	// 		moverIzquierda()
	// 		let valor = circulo.getBoundingClientRect()
	// 	}
	// 	if (codigo===38) {							// ARRIBA
	// 		moverArriba()
	// 		let valor = circulo.getBoundingClientRect()
	// 	}
	// 	if (codigo===39) {							// DERECHA
	// 		moverDerecha()
	// 		let valor = circulo.getBoundingClientRect()
	// 	}
	// 	if (codigo===40) {							// ABAJO
	// 		moverAbajo()
	// 		let valor = circulo.getBoundingClientRect()
	// 	}
	// })
	// document.addEventListener('keydown', function (event) {
	// 	clearInterval(alea)
	// 	const codigo = event.keyCode
	// 	if (codigo===32) {
	// 		aleatorio()
	// 	}
	// })
	// document.addEventListener('keydown', function (event) {
	// 	clearInterval(alea)
	// 	const codigo = event.keyCode
	// 	if (codigo===13) {
	// 		alea = setInterval(aleatorio,500)
	// 	}
	// })

	// rojo.addEventListener('click', function(){
	// 	cambiarColor('red')
	// })
	// verde.addEventListener('click', function(){
	// 	cambiarColor('green')
	// })
	// azul.addEventListener('click', function(){
	// 	cambiarColor('blue')
	// })

	// ------------ FUNCIONES ----------------//

	// let alea = setInterval(aleatorio,500)			// FUNCION INICIAL (ALEATORIO)

	const diag = setInterval(diagonal,500)

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
			d = 0
		}else{
			circulo.style.left= '0px'
			d = 4
		}
	}
	function moverArriba(){
		const arriba = circulo.offsetTop
		if (arriba>movement) {
			circulo.style.top = arriba - movement + 'px'
			d = 0
		}else{
			circulo.style.top= '0px'
			d = 3
		}
	}
	function moverDerecha(){
		const ancho = container.offsetWidth
		const diametro = circulo.offsetWidth
		const der = circulo.offsetLeft
		if (der+diametro+movement+24<ancho) {
			circulo.style.left = der + movement + 'px'
			d = 0
		}else{
			circulo.style.left = ancho - diametro - 24 + 'px'
			d = 2
		}
	}
	function moverAbajo(){
		const diametro = circulo.offsetWidth
		const alto = container.offsetHeight
		const arriba = circulo.offsetTop
		if (arriba+diametro+movement+24<alto) {
			circulo.style.top = arriba + movement + 'px'
			d = 0
		}else{
			circulo.style.top = alto - diametro - 24 + 'px'
			d = 1
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

	let a = moverAbajo()
	let b = moverDerecha()

	function diagonal(){
		switch(d){
			case 1:
				a = moverArriba()
				console.log(1)
			break
			case 2:
				b = moverIzquierda()
				console.log(2)
			break
			case 3:
				a = moverAbajo()
				console.log(3)
			break
			case 4:
				b = moverDerecha()
				console.log(4)
			break
		}
	}
})

/*

	1 : toca abajo
	2 : toca derecha
	3 : toca arriba
	4 : toca izquierda

	ABAJO-DERECHA
	ARRIBA-DERECHA
	ARRIBA-IZQUIERDA
	ABAJO-IZQUIERDA

	BORDE DE ABAJO: TOP:456
	BORDE DE ARRIBA: TOP:12
	BORDE DERECHO: LEFT:1285
	BORDE IZQUIERDO: LEFT:12

*/
