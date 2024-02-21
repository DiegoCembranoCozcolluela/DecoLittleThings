//script para cargar los contenidos de las diferentes secciones//
function cargarSeccion(numero){
	var objHttp = null;
	if (window.XMLHttpRequest){
		objHttp = new XMLHttpRequest();
	}else if(window.ActiveXObject){
		objHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	objHttp.open("GET", "secciones/seccion" + numero + ".html", true);
	objHttp.onreadystatechange = function(){
		if(objHttp.readyState == 4){
			document.getElementById('div_seccion_principal').innerHTML = objHttp.responseText;
		}
	}
	objHttp.send(null);
};

//script para cargar los filtros del catalogo//

var marco = document.getElementsByClassName('marco');
var aro = document.getElementsByClassName('aro');
var mesero = document.getElementsByClassName('mesero');
var portalianzas = document.getElementsByClassName('portalianzas');
var marcasitios = document.getElementsByClassName('marcasitios');
var letra = document.getElementsByClassName('letra');
var portavelas = document.getElementsByClassName('portavelas');
var taza = document.getElementsByClassName('taza');
var espejo = document.getElementsByClassName('espejo');

function vertodo(){

	for (var i=0;i<marco.length;i+=1){
		marco[i].style.display = 'inline';
	}

	for (var i=0;i<aro.length;i+=1){
		aro[i].style.display = 'inline';
	}

	for (var i=0;i<mesero.length;i+=1){
		mesero[i].style.display = 'inline';
	}

	for (var i=0;i<portalianzas.length;i+=1){
		portalianzas[i].style.display = 'inline';
	}

	for (var i=0;i<marcasitios.length;i+=1){
		marcasitios[i].style.display = 'inline';
	}

	for (var i=0;i<letra.length;i+=1){
		letra[i].style.display = 'inline';
	}

	for (var i=0;i<portavelas.length;i+=1){
		portavelas[i].style.display = 'inline';
	}

	for (var i=0;i<taza.length;i+=1){
		taza[i].style.display = 'inline';
	}

	for (var i=0;i<espejo.length;i+=1){
		espejo[i].style.display = 'inline';
	}

	for (var i=0;i<novedad.length;i+=1){
		novedad[i].style.display = 'inline';
	}

	for (var i=0;i<oferta.length;i+=1){
		oferta[i].style.display = 'inline';
	}
};

function veraros(){

	for (var i=0;i<marco.length;i+=1){
		marco[i].style.display = 'none';
	}

	for (var i=0;i<aro.length;i+=1){
		aro[i].style.display = 'inline';
	}

	for (var i=0;i<mesero.length;i+=1){
		mesero[i].style.display = 'none';
	}

	for (var i=0;i<portalianzas.length;i+=1){
		portalianzas[i].style.display = 'none';
	}

	for (var i=0;i<marcasitios.length;i+=1){
		marcasitios[i].style.display = 'none';
	}

	for (var i=0;i<letra.length;i+=1){
		letra[i].style.display = 'none';
	}

	for (var i=0;i<portavelas.length;i+=1){
		portavelas[i].style.display = 'none';
	}

	for (var i=0;i<taza.length;i+=1){
		taza[i].style.display = 'none';
	}

	for (var i=0;i<espejo.length;i+=1){
		espejo[i].style.display = 'none';
	}
};

function vermarcos(){

	for (var i=0;i<marco.length;i+=1){
		marco[i].style.display = 'inline';
	}

	for (var i=0;i<aro.length;i+=1){
		aro[i].style.display = 'none';
	}

	for (var i=0;i<mesero.length;i+=1){
		mesero[i].style.display = 'none';
	}

	for (var i=0;i<portalianzas.length;i+=1){
		portalianzas[i].style.display = 'none';
	}

	for (var i=0;i<marcasitios.length;i+=1){
		marcasitios[i].style.display = 'none';
	}

	for (var i=0;i<letra.length;i+=1){
		letra[i].style.display = 'none';
	}

	for (var i=0;i<portavelas.length;i+=1){
		portavelas[i].style.display = 'none';
	}

	for (var i=0;i<taza.length;i+=1){
		taza[i].style.display = 'none';
	}

	for (var i=0;i<espejo.length;i+=1){
		espejo[i].style.display = 'none';
	}
};

function vermeseros(){

	for (var i=0;i<marco.length;i+=1){
		marco[i].style.display = 'none';
	}

	for (var i=0;i<aro.length;i+=1){
		aro[i].style.display = 'none';
	}

	for (var i=0;i<mesero.length;i+=1){
		mesero[i].style.display = 'inline';
	}

	for (var i=0;i<portalianzas.length;i+=1){
		portalianzas[i].style.display = 'none';
	}

	for (var i=0;i<marcasitios.length;i+=1){
		marcasitios[i].style.display = 'none';
	}

	for (var i=0;i<letra.length;i+=1){
		letra[i].style.display = 'none';
	}

	for (var i=0;i<portavelas.length;i+=1){
		portavelas[i].style.display = 'none';
	}

	for (var i=0;i<taza.length;i+=1){
		taza[i].style.display = 'none';
	}

	for (var i=0;i<espejo.length;i+=1){
		espejo[i].style.display = 'none';
	}
};

function verportalianzas(){

	for (var i=0;i<marco.length;i+=1){
		marco[i].style.display = 'none';
	}

	for (var i=0;i<aro.length;i+=1){
		aro[i].style.display = 'none';
	}

	for (var i=0;i<mesero.length;i+=1){
		mesero[i].style.display = 'none';
	}

	for (var i=0;i<portalianzas.length;i+=1){
		portalianzas[i].style.display = 'inline';
	}

	for (var i=0;i<marcasitios.length;i+=1){
		marcasitios[i].style.display = 'none';
	}

	for (var i=0;i<letra.length;i+=1){
		letra[i].style.display = 'none';
	}

	for (var i=0;i<portavelas.length;i+=1){
		portavelas[i].style.display = 'none';
	}

	for (var i=0;i<taza.length;i+=1){
		taza[i].style.display = 'none';
	}

	for (var i=0;i<espejo.length;i+=1){
		espejo[i].style.display = 'none';
	}
};

function vermarcasitios(){
	
	for (var i=0;i<marco.length;i+=1){
		marco[i].style.display = 'none';
	}

	for (var i=0;i<aro.length;i+=1){
		aro[i].style.display = 'none';
	}

	for (var i=0;i<mesero.length;i+=1){
		mesero[i].style.display = 'none';
	}

	for (var i=0;i<portalianzas.length;i+=1){
		portalianzas[i].style.display = 'none';
	}

	for (var i=0;i<marcasitios.length;i+=1){
		marcasitios[i].style.display = 'inline';
	}

	for (var i=0;i<letra.length;i+=1){
		letra[i].style.display = 'none';
	}

	for (var i=0;i<portavelas.length;i+=1){
		portavelas[i].style.display = 'none';
	}

	for (var i=0;i<taza.length;i+=1){
		taza[i].style.display = 'none';
	}

	for (var i=0;i<espejo.length;i+=1){
		espejo[i].style.display = 'none';
	}
};

function verletras(){
	
	for (var i=0;i<marco.length;i+=1){
		marco[i].style.display = 'none';
	}

	for (var i=0;i<aro.length;i+=1){
		aro[i].style.display = 'none';
	}

	for (var i=0;i<mesero.length;i+=1){
		mesero[i].style.display = 'none';
	}

	for (var i=0;i<portalianzas.length;i+=1){
		portalianzas[i].style.display = 'none';
	}

	for (var i=0;i<marcasitios.length;i+=1){
		marcasitios[i].style.display = 'none';
	}

	for (var i=0;i<letra.length;i+=1){
		letra[i].style.display = 'inline';
	}

	for (var i=0;i<portavelas.length;i+=1){
		portavelas[i].style.display = 'none';
	}

	for (var i=0;i<taza.length;i+=1){
		taza[i].style.display = 'none';
	}

	for (var i=0;i<espejo.length;i+=1){
		espejo[i].style.display = 'none';
	}
};

function verportavelas(){
	
	for (var i=0;i<marco.length;i+=1){
		marco[i].style.display = 'none';
	}

	for (var i=0;i<aro.length;i+=1){
		aro[i].style.display = 'none';
	}

	for (var i=0;i<mesero.length;i+=1){
		mesero[i].style.display = 'none';
	}

	for (var i=0;i<portalianzas.length;i+=1){
		portalianzas[i].style.display = 'none';
	}

	for (var i=0;i<marcasitios.length;i+=1){
		marcasitios[i].style.display = 'none';
	}

	for (var i=0;i<letra.length;i+=1){
		letra[i].style.display = 'none';
	}

	for (var i=0;i<portavelas.length;i+=1){
		portavelas[i].style.display = 'inline';
	}

	for (var i=0;i<taza.length;i+=1){
		taza[i].style.display = 'none';
	}

	for (var i=0;i<espejo.length;i+=1){
		espejo[i].style.display = 'none';
	}
};

function vertazas(){
	
	for (var i=0;i<marco.length;i+=1){
		marco[i].style.display = 'none';
	}

	for (var i=0;i<aro.length;i+=1){
		aro[i].style.display = 'none';
	}

	for (var i=0;i<mesero.length;i+=1){
		mesero[i].style.display = 'none';
	}

	for (var i=0;i<portalianzas.length;i+=1){
		portalianzas[i].style.display = 'none';
	}

	for (var i=0;i<marcasitios.length;i+=1){
		marcasitios[i].style.display = 'none';
	}

	for (var i=0;i<letra.length;i+=1){
		letra[i].style.display = 'none';
	}

	for (var i=0;i<portavelas.length;i+=1){
		portavelas[i].style.display = 'none';
	}

	for (var i=0;i<taza.length;i+=1){
		taza[i].style.display = 'inline';
	}

	for (var i=0;i<espejo.length;i+=1){
		espejo[i].style.display = 'none';
	}
};

function verespejos(){
	
	for (var i=0;i<marco.length;i+=1){
		marco[i].style.display = 'none';
	}

	for (var i=0;i<aro.length;i+=1){
		aro[i].style.display = 'none';
	}

	for (var i=0;i<mesero.length;i+=1){
		mesero[i].style.display = 'none';
	}

	for (var i=0;i<portalianzas.length;i+=1){
		portalianzas[i].style.display = 'none';
	}

	for (var i=0;i<marcasitios.length;i+=1){
		marcasitios[i].style.display = 'none';
	}

	for (var i=0;i<letra.length;i+=1){
		letra[i].style.display = 'none';
	}

	for (var i=0;i<portavelas.length;i+=1){
		portavelas[i].style.display = 'none';
	}

	for (var i=0;i<taza.length;i+=1){
		taza[i].style.display = 'none';
	}

	for (var i=0;i<espejo.length;i+=1){
		espejo[i].style.display = 'inline';
	}
};