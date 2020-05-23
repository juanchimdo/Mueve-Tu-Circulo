(function(){
	document.addEventListener("DOMContentLoaded", function() {
		document.querySelector ('body').focus ()
		const circulo = document.querySelector ('.circulo')
		let posicionHorizontal = -40
		let posicionVertical = -40
		function moverIzquierda () {
			posicionHorizontal = posicionHorizontal-80
			circulo.style.marginLeft = posicionHorizontal + 'px'
		}
		function moverArriba () {
			posicionVertical = posicionVertical-80
			circulo.style.marginTop = posicionVertical + 'px'
		}
		function moverDerecha () {
			posicionHorizontal = posicionHorizontal+80
			circulo.style.marginLeft = posicionHorizontal + 'px'
		}
		function moverAbajo () {
			posicionVertical = posicionVertical+80
			circulo.style.marginTop = posicionVertical + 'px'
		}
		document.addEventListener('keydown', function (e) {
	    let codigo = e.keyCode
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
		});	
	})
}())
