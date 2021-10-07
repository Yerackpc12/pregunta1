function myFunction() {
	var key = true;
	var i = 1;
	var count;
	var primos = [];
	var index = 0;
	var cadena = "Numeros primos : ";
  while (key == true) {
  	count = 0;
  	for (var j= 1; j<= i ; j++){
  		if (i%j == 0){
  			count += 1;
  		}
  	}
  	if (count == 2){
  		primos[index] = i;
  		index++;
  	}
  	if(index == 10){
  		key = false;
  	}
  	i++;
  }
  console.log(primos);
  
  for (var y= 0; y<primos.length; y++){
  	cadena += primos[y].toString() + " ";
  }
  console.log(cadena);
  document.getElementById("result").innerHTML = cadena;
}