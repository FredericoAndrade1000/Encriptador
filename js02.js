var saida = "", fnor = "";

//ENCRIPTAR

listaDeEntrada = [];
listaDeSaida = [];

function enviar(){
	saida = document.getElementById("entrada-frase-normal").value;
	listaDeEntrada = saida.split("")
	encriptar();
}
function substituir(item, i){
	if (item == "!"){
		listaDeEntrada[i] = "a";
	}
	if (item == "@"){
		listaDeEntrada[i] = "b";
	}
	if (item == "#"){
		listaDeEntrada[i] = "c";
	}
	if (item == "$"){
		listaDeEntrada[i] = "d";
	}
	if (item == "%"){
		listaDeEntrada[i] = "e";
	}
	if (item == "&"){
		listaDeEntrada[i] = "f";
	}
	if (item == "*"){
		listaDeEntrada[i] = "g";
	}
	if (item == "+"){
		listaDeEntrada[i] = "h";
	}
	if (item == "¢"){
		listaDeEntrada[i] = "i";
	}
	if (item == "1"){
		listaDeEntrada[i] = "j";
	}
	if (item == "2"){
		listaDeEntrada[i] = "k";
	}
	if (item == "3"){
		listaDeEntrada[i] = "l";
	}
	if (item == "4"){
		listaDeEntrada[i] = "m";
	}	
	if (item == "5"){
		listaDeEntrada[i] = "n";
	}	
	if (item == "6"){
		listaDeEntrada[i] = "o";
	}
	if (item == "7"){
		listaDeEntrada[i] = "p";
	}
	if (item == "8"){
		listaDeEntrada[i] = "q";
	}	
	if (item == "9"){
		listaDeEntrada[i] = "r";
	}	
	if (item == "0"){
		listaDeEntrada[i] = "s";
	}	
	if (item == "º"){
		listaDeEntrada[i] = "t";
	}	
	if (item == "~"){
		listaDeEntrada[i] = "u";
	}	
	if (item == "´"){
		listaDeEntrada[i] = "v";
	}		
	if (item == "."){
		listaDeEntrada[i] = "w";
	}	
	if (item == ","){
		listaDeEntrada[i] = "x";
	}	
	if (item == ";"){
		listaDeEntrada[i] = "y";
	}	
	if (item == "ª"){
		listaDeEntrada[i] = "z";
	}	
	if (item == "`"){
		listaDeEntrada[i] = " ";
	}
	else{
		saida = "";
	}
	
	
}

function encriptar(item){
	listaDeEntrada.forEach(substituir);
	listaDeSaida = listaDeEntrada.join('');
	document.getElementById("saida").innerHTML = listaDeSaida;
	console.log(listaDeSaida);
}
