var saida = "", fnor = "";

//ENCRIPTAR

listaDeEntrada = [];
listaDeSaida = [];

function enviar(){
	saida = document.getElementById("entrada-frase-normal").value;
	saida = saida.toLowerCase();
	listaDeEntrada = saida.split("")
	encriptar();
}
function substituir(item, i){
	if (item == "a"){
		listaDeEntrada[i] = "!";
	}
	if (item == "b"){
		listaDeEntrada[i] = "@";
	}
	if (item == "c"){
		listaDeEntrada[i] = "#";
	}
	if (item == "d"){
		listaDeEntrada[i] = "$";
	}
	if (item == "e"){
		listaDeEntrada[i] = "%";
	}
	if (item == "f"){
		listaDeEntrada[i] = "&";
	}
	if (item == "g"){
		listaDeEntrada[i] = "*";
	}
	if (item == "h"){
		listaDeEntrada[i] = "+";
	}
	if (item == "i"){
		listaDeEntrada[i] = "¢";
	}
	if (item == "j"){
		listaDeEntrada[i] = "1";
	}
	if (item == "k"){
		listaDeEntrada[i] = "2";
	}
	if (item == "l"){
		listaDeEntrada[i] = "3";
	}
	if (item == "m"){
		listaDeEntrada[i] = "4";
	}	
	if (item == "n"){
		listaDeEntrada[i] = "5";
	}	
	if (item == "o"){
		listaDeEntrada[i] = "6";
	}
	if (item == "p"){
		listaDeEntrada[i] = "7";
	}
	if (item == "q"){
		listaDeEntrada[i] = "8";
	}	
	if (item == "r"){
		listaDeEntrada[i] = "9";
	}	
	if (item == "s"){
		listaDeEntrada[i] = "0";
	}	
	if (item == "t"){
		listaDeEntrada[i] = "º";
	}	
	if (item == "u"){
		listaDeEntrada[i] = "~";
	}	
	if (item == "v"){
		listaDeEntrada[i] = "´";
	}		
	if (item == "w"){
		listaDeEntrada[i] = ".";
	}	
	if (item == "x"){
		listaDeEntrada[i] = ",";
	}	
	if (item == "y"){
		listaDeEntrada[i] = ";";
	}	
	if (item == "z"){
		listaDeEntrada[i] = "ª";
	}	
	if (item == " "){
		listaDeEntrada[i] = "`";
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
