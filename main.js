let vertical = 0
let horizontal = 0
let alea
let diag
const movement = 50

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
	alea = window.setInterval(aleatorio,1000,circulo, container)

	// ------------ EVENTOS ----------------//

	left.addEventListener('click', function(){		// MUEVE A LA IZQUIERDA CON CLICK
		clearInterval(diag)
		clearInterval(alea)
		moverIzquierda(circulo)
	})
	right.addEventListener('click', function(){		// MUEVE A LA DERECHA CON CLICK
		clearInterval(diag)
		clearInterval(alea)
		moverDerecha(circulo, container)
	})
	down.addEventListener('click', function(){		// MUEVE ABAJO CON CLICK
		clearInterval(diag)
		clearInterval(alea)
		moverAbajo(circulo, container)
	})
	up.addEventListener('click', function(){		// MUEVE ARRIBA CON CLICK
		clearInterval(diag)
		clearInterval(alea)
		moverArriba(circulo)
	})
	document.addEventListener('keydown',function(e){// MUEVE EL CIRCULO CON LAS FLECHAS
		if (e.keyCode===37||e.keyCode===38||e.keyCode===39||e.keyCode===40) {
			clearInterval(diag)
			clearInterval(alea)
			if (e.keyCode===37) {			// IZQUIERDA
				moverIzquierda(circulo)
				left.style.background='grey'
			}
			if (e.keyCode===38) {			// ARRIBA
				moverArriba(circulo)
				up.style.background='grey'
			}
			if (e.keyCode===39) {			// DERECHA
				moverDerecha(circulo, container)
				right.style.background='grey'
			}
			if (e.keyCode===40) {			// ABAJO
				moverAbajo(circulo, container)
				down.style.background='grey'
			}			
		}
	})
	document.addEventListener('keyup',function(e){	// VUELVE LAS FLECHAS AL COLOR ORIGINAL
		if (e.keyCode===37||e.keyCode===38||e.keyCode===39||e.keyCode===40) {
			if (e.keyCode===37) {			// IZQUIERDA
				left.style.background='black'
			}
			if (e.keyCode===38) {			// ARRIBA
				up.style.background='black'
			}
			if (e.keyCode===39) {			// DERECHA
				right.style.background='black'
			}
			if (e.keyCode===40) {			// ABAJO
				down.style.background='black'
			}			
		}
	})
	document.addEventListener('keydown',function(e){// MUEVE ALEATORIO DE A UNA VEZ CON LA BARRA ESPACIADORA
		if (e.keyCode===32) {
			clearInterval(diag)
			clearInterval(alea)
			aleatorio(circulo, container)
		}
	})
	document.addEventListener('keydown',function(e){// MODO ALEATORIO AL APRETAR ENTER
		if (e.keyCode===13) {
			clearInterval(diag)
			clearInterval(alea)
			alea = window.setInterval(aleatorio,1000,circulo, container)
		}
	})
	rojo.addEventListener('click', function(){		// CAMBIO DE COLOR ROJO
		cambiarColor(circulo, 'red')
	})
	verde.addEventListener('click', function(){		// CAMBIO DE COLOR VERDE
		cambiarColor(circulo, 'green')
	})
	azul.addEventListener('click', function(){		// CAMBIO DE COLOR AZUL
		cambiarColor(circulo, 'blue')
	})
	circulo.addEventListener('click', function(){	// ESTADO DE MOVIMIENTOS DIAGONALES
		clearInterval(alea)
		clearInterval(diag)
		diag = window.setInterval(diagonal,1000)
	})

	// ------------ FUNCIONES ----------------//

	function aleatorio(circ, cont){					// FUNCION MOVIMIENTO ALEATORIO
		const random = Math.floor(Math.random() * 4)
		if (random === 0) {
			moverIzquierda(circ)
		}
		if (random === 1) {
			moverDerecha(circ, cont)
		}
		if (random === 2) {
			moverAbajo(circ, cont)
		}
		if (random === 3) {
			moverArriba(circ)
		}
		colorAleatorio(circ)
	}
	function diagonal(){							// DECISION MOVIMIENTO DIAGONAL
		if (vertical === 0 && horizontal === 0) {
			return abajoDerecha(circulo, container)
		}
		if (vertical === 1 && horizontal === 0) {
			return arribaDerecha(circulo, container)
		}
		if (vertical ===1 && horizontal === 1) {
			return arribaIzquierda(circulo)
		}
		if (vertical === 0 && horizontal === 1) {
			return abajoIzquierda(circulo, container)
		}
	}
})

function cambiarColor(circ, color){					// CAMBIAR DE COLOR
	circ.style.background = color
}
function colorAleatorio(circ){						// CAMBIO DE COLOR ALEATORIO
	const random = Math.floor(Math.random() * 3)
	if (random === 0) {
		cambiarColor(circ, 'red')
	}
	if (random === 1) {
		cambiarColor(circ, 'blue')
	}
	if (random === 2) {
		cambiarColor(circ, 'green')
	}
}
function moverIzquierda(circ){						// MOVER A LA IZQUIERDA
	const distanciaIzquierda = circ.offsetLeft
	if (distanciaIzquierda>movement) {
		circ.style.left = distanciaIzquierda - movement + 'px'
	}else{
		circ.style.left= '0px'
	}
}
function moverArriba(circ){							// MOVER ARRIBA
	const distanciaTecho = circ.offsetTop
	if (distanciaTecho>movement) {
		circ.style.top = distanciaTecho - movement + 'px'
	}else{
		circ.style.top= '0px'
	}
}
function moverDerecha(circ, cont){					// MOVER A LA DERECHA
	const distanciaIzquierda = circ.offsetLeft
	const distanciaDerecha = cont.offsetWidth - circ.offsetWidth - distanciaIzquierda - 24
	if (distanciaDerecha>movement) {
		circ.style.left = distanciaIzquierda + movement + 'px'
	}else{
		circ.style.left = distanciaIzquierda + distanciaDerecha + 'px'
	}
}
function moverAbajo(circ, cont){					// MOVER ABAJO
	const distanciaTecho = circ.offsetTop
	const distanciaPiso = cont.offsetHeight - distanciaTecho - circ.offsetWidth - 24
	if (distanciaPiso>movement) {
		circ.style.top = distanciaTecho + movement + 'px'
	}else{
		circ.style.top = distanciaTecho + distanciaPiso + 'px'
	}
}
function arribaDerecha(circ, cont){					// DIAGONAL ARRIBA DERECHA
	const distanciaIzquierda = circ.offsetLeft
	const distanciaTecho = circ.offsetTop
	const distanciaDerecha = cont.offsetWidth - distanciaIzquierda - circ.offsetWidth - 24
	if (distanciaTecho<=distanciaDerecha) {
		circ.style.top = 0 + 'px'
		circ.style.left = distanciaIzquierda + distanciaTecho + 'px'
		vertical = 0
	}else{
		circ.style.top = distanciaTecho - distanciaDerecha + 'px'
		circ.style.left = distanciaIzquierda + distanciaDerecha + 'px'
		horizontal = 1
	}		
}
function arribaIzquierda(circ){						// DIAGONAL ARRIBA IZQUIERDA
	const distanciaTecho = circ.offsetTop
	const distanciaIzquierda = circ.offsetLeft
	if (distanciaTecho<=distanciaIzquierda) {
		circ.style.top = 0 + 'px'
		circ.style.left = distanciaIzquierda - distanciaTecho + 'px'
		vertical = 0
	}else{
		circ.style.top = distanciaTecho - distanciaIzquierda + 'px'
		circ.style.left = 0 + 'px'
		horizontal = 0
	}		
}
function abajoDerecha(circ, cont){					// DIAGONAL ABAJO DERECHA
	const distanciaIzquierda = circ.offsetLeft
	const distanciaTecho = circ.offsetTop
	const distanciaPiso = cont.offsetHeight - distanciaTecho - circ.offsetWidth - 24
	const distanciaDerecha = cont.offsetWidth - distanciaIzquierda - circ.offsetWidth - 24
	if (distanciaPiso<=distanciaDerecha) {
		circ.style.top = distanciaTecho + distanciaPiso + 'px'
		circ.style.left = distanciaIzquierda + distanciaPiso + 'px'
		vertical = 1
	}else{
		circ.style.top = distanciaTecho + distanciaDerecha + 'px'
		circ.style.left = distanciaIzquierda + distanciaDerecha + 'px'
		horizontal = 1
	}		
}
function abajoIzquierda(circ, cont){				// DIAGONAL ABAJO IZQUIERDA
	const distanciaIzquierda = circ.offsetLeft
	const distanciaTecho = circ.offsetTop
	const distanciaPiso = cont.offsetHeight - distanciaTecho - circ.offsetWidth - 24
		if (distanciaPiso<=distanciaIzquierda) {
			circ.style.top = distanciaTecho + distanciaPiso + 'px'
			circ.style.left = distanciaIzquierda - distanciaPiso + 'px'
			vertical = 1
		}else{
			circ.style.top = distanciaTecho + distanciaIzquierda + 'px'
			circ.style.left = 0 + 'px'
			horizontal = 0
		}
}