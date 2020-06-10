document.addEventListener("DOMContentLoaded", function() {
	const circulo = document.querySelector ('.circulo')

	let posicionHorizontal = -40
	let posicionVertical = -40

	function moverIzquierda () {
		posicionHorizontal = posicionHorizontal-20
		circulo.style.marginLeft = posicionHorizontal + 'px'
		console.log(circulo.style.marginLeft)
	}
	function moverArriba () {
		posicionVertical = posicionVertical-20
		circulo.style.marginTop = posicionVertical + 'px'
	}
	function moverDerecha () {
		posicionHorizontal = posicionHorizontal+20
		circulo.style.marginLeft = posicionHorizontal + 'px'
	}
	function moverAbajo () {
		posicionVertical = posicionVertical+20
		circulo.style.marginTop = posicionVertical + 'px'
	}


	document.addEventListener('keydown', function (event) {
	const codigo = event.keyCode
	if (codigo===37) {
		return moverIzquierda ()
	}
	if (codigo===38) {
		return moverArriba ()
	}
	if (codigo===39) {
		return moverDerecha ()
	}
	if (codigo===40) {
		return moverAbajo ()
	}
	})
})

function mover () {

}
