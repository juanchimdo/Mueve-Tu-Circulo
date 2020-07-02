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
	const movDiagonal = 5000

	let vertical = 0
	let horizontal = 0

	let alea = setInterval(aleatorio,1000)
	let diag

	// ------------ EVENTOS ----------------//

	left.addEventListener('click', function(){		// MUEVE A LA IZQUIERDA CON CLICK
		clearInterval(diag)
		clearInterval(alea)
		moverIzquierda()
	})
	right.addEventListener('click', function(){		// MUEVE A LA DERECHA CON CLICK
		clearInterval(diag)
		clearInterval(alea)
		moverDerecha()
	})
	down.addEventListener('click', function(){		// MUEVE ABAJO CON CLICK
		clearInterval(diag)
		clearInterval(alea)
		moverAbajo()
	})
	up.addEventListener('click', function(){		// MUEVE ARRIBA CON CLICK
		clearInterval(diag)
		clearInterval(alea)
		moverArriba()
	})
	document.addEventListener('keydown',function(e){// MUEVE EL CIRCULO CON LAS FLECHAS
		clearInterval(diag)
		clearInterval(alea)
		const codigo = e.keyCode
		if (codigo===37) {			// IZQUIERDA
			moverIzquierda()
		}
		if (codigo===38) {			// ARRIBA
			moverArriba()
		}
		if (codigo===39) {			// DERECHA
			moverDerecha()
		}
		if (codigo===40) {			// ABAJO
			moverAbajo()
		}
	})
	document.addEventListener('keydown',function(e){// MUEVE ALEATORIO DE A UNA VEZ CON LA BARRA ESPACIADORA
		clearInterval(diag)
		clearInterval(alea)
		const codigo = e.keyCode
		if (codigo===32) {
			aleatorio()
		}
	})
	document.addEventListener('keydown',function(e){// MODO ALEATORIO AL APRETAR ENTER
		clearInterval(diag)
		clearInterval(alea)
		const codigo = e.keyCode
		if (codigo===13) {
			alea = setInterval(aleatorio,1000)
		}
	})
	rojo.addEventListener('click', function(){		// CAMBIO DE COLOR ROJO
		cambiarColor('red')
	})
	verde.addEventListener('click', function(){		// CAMBIO DE COLOR VERDE
		cambiarColor('green')
	})
	azul.addEventListener('click', function(){		// CAMBIO DE COLOR AZUL
		cambiarColor('blue')
	})
	circulo.addEventListener('click', function(){	// ESTADO DE MOVIMIENTOS DIAGONALES
		clearInterval(alea)
		diag = setInterval(diagonal,1000)
	})

	// ------------ FUNCIONES ----------------//

	function aleatorio(){							// FUNCION MOVIMIENTO ALEATORIO
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
	function moverIzquierda(){						// MOVER A LA IZQUIERDA
		const izq = circulo.offsetLeft
		if (izq>movement) {
			circulo.style.left = izq - movement + 'px'
		}else{
			circulo.style.left= '0px'
		}
	}
	function moverArriba(){							// MOVER ARRIBA
		const arriba = circulo.offsetTop
		if (arriba>movement) {
			circulo.style.top = arriba - movement + 'px'
		}else{
			circulo.style.top= '0px'
		}
	}
	function moverDerecha(){						// MOVER A LA DERECHA
		const ancho = container.offsetWidth
		const diametro = circulo.offsetWidth
		const der = circulo.offsetLeft
		if (der+diametro+movement+24<ancho) {
			circulo.style.left = der + movement + 'px'
		}else{
			circulo.style.left = ancho - diametro - 24 + 'px'
		}
	}
	function moverAbajo(){							// MOVER ABAJO
		const diametro = circulo.offsetWidth
		const alto = container.offsetHeight
		const arriba = circulo.offsetTop
		if (arriba+diametro+movement+24<alto) {
			circulo.style.top = arriba + movement + 'px'
		}else{
			circulo.style.top = alto - diametro - 24 + 'px'
		}
	}
	function cambiarColor(color){					// CAMBIAR DE COLOR
		circulo.style.background = color
	}
	function colorAleatorio(){						// CAMBIO DE COLOR ALEATORIO
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
	function arribaDerecha(){						// DIAGONAL ARRIBA DERECHA
		const ancho = container.offsetWidth
		const largo = circulo.offsetLeft
		const arriba = circulo.offsetTop
		const diametro = circulo.offsetWidth
		const distanciaTecho = arriba
		const distanciaPared = ancho - largo - diametro - 24
		let techoPrimero = false
		if (movDiagonal>=distanciaTecho || movDiagonal>=distanciaPared) {
			if (distanciaTecho<=distanciaPared) {
				techoPrimero = true
			}
			if (techoPrimero) {
				circulo.style.top = arriba - distanciaTecho + 'px'
				circulo.style.left = largo + distanciaTecho + 'px'
				vertical = 0
			}else{
				circulo.style.top = arriba - distanciaPared + 'px'
				circulo.style.left = largo + distanciaPared + 'px'
				horizontal = 1
			}		
		}else{
			circulo.style.top = arriba - movDiagonal+ 'px'
			circulo.style.left = largo + movDiagonal + 'px'
		}
	}
	function arribaIzquierda(){						// DIAGONAL ARRIBA IZQUIERDA
		const largo = circulo.offsetLeft
		const arriba = circulo.offsetTop
		const distanciaTecho = arriba
		const distanciaPared = largo
		let techoPrimero = false
		if (movDiagonal>=distanciaTecho || movDiagonal>=distanciaPared) {
			if (distanciaTecho<=distanciaPared) {
				techoPrimero = true
			}
			if (techoPrimero) {
				circulo.style.top = arriba - distanciaTecho + 'px'
				circulo.style.left = largo - distanciaTecho + 'px'
				vertical = 0
			}else{
				circulo.style.top = arriba - distanciaPared + 'px'
				circulo.style.left = largo - distanciaPared + 'px'
				horizontal = 0
			}		
		}else{
			circulo.style.top = arriba - movDiagonal+ 'px'
			circulo.style.left = largo - movDiagonal + 'px'
		}
	}
	function abajoDerecha(){						// DIAGONAL ABAJO DERECHA
		const alto = container.offsetHeight
		const ancho = container.offsetWidth
		const largo = circulo.offsetLeft
		const arriba = circulo.offsetTop
		const diametro = circulo.offsetWidth
		const distanciaPiso = alto - arriba - diametro - 24
		const distanciaPared = ancho - largo - diametro - 24
		let pisoPrimero = false
		if (movDiagonal>=distanciaPiso || movDiagonal>=distanciaPared) {
			if (distanciaPiso-distanciaPared<=0) {
				pisoPrimero = true
			}
			if (pisoPrimero) {
				circulo.style.top = arriba + distanciaPiso + 'px'
				circulo.style.left = largo + distanciaPiso + 'px'
				vertical = 1
			}else{
				circulo.style.top = arriba + distanciaPared + 'px'
				circulo.style.left = largo + distanciaPared + 'px'
				horizontal = 1
			}		
		}else{
			circulo.style.top = arriba + movDiagonal + 'px'
			circulo.style.left = largo + movDiagonal + 'px'
		}
	}
	function abajoIzquierda(){						// DIAGONAL ABAJO IZQUIERDA
		const alto = container.offsetHeight
		const largo = circulo.offsetLeft
		const arriba = circulo.offsetTop
		const diametro = circulo.offsetWidth
		const distanciaPiso = alto - arriba - diametro - 24
		const distanciaPared = largo
		let pisoPrimero = false
		if (movDiagonal>=distanciaPiso || movDiagonal>=distanciaPared) {
			if (distanciaPiso<=distanciaPared) {
				pisoPrimero = true
			}
			if (pisoPrimero) {
				circulo.style.top = arriba + distanciaPiso + 'px'
				circulo.style.left = largo - distanciaPiso + 'px'
				vertical = 1
			}else{
				circulo.style.top = arriba + distanciaPared + 'px'
				circulo.style.left = largo - distanciaPared + 'px'
				horizontal = 0
			}		
		}else{
			circulo.style.top = arriba + movDiagonal+ 'px'
			circulo.style.left = largo - movDiagonal + 'px'
		}
	}
	function diagonal(){							// DECISION MOVIMIENTO DIAGONAL
		if (vertical === 0 && horizontal === 0) {
			return abajoDerecha()
		}
		if (vertical === 1 && horizontal === 0) {
			return arribaDerecha()
		}
		if (vertical ===1 && horizontal === 1) {
			return arribaIzquierda()
		}
		if (vertical === 0 && horizontal === 1) {
			return abajoIzquierda()
		}
	}
})

