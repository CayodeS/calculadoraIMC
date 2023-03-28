function calcular(){
    var nome = document.getElementById('nome')
    var altura = document.getElementById('altura')
    var peso = document.getElementById('peso')
    var result = document.getElementById('resultado')

    var imc = Number(peso.value) / Number((altura.value / 100) ** 2)
    if (imc < 18.5){
        result.innerHTML = `${nome.value} seu IMC é ${imc.toFixed(2)} e você estar abaixo do peso`
    } else if (imc < 24.9){
        result.innerHTML = `${nome.value} seu IMC é ${imc.toFixed(2)} e você estar com o peso normal`
    }else if(imc < 29.9){
        result.innerHTML = `${nome.value} seu IMC é ${imc.toFixed(2)} e você estar sobrepeso`
    }else if (imc < 34.9){
        result.innerHTML = `${nome.value} seu IMC é ${imc.toFixed(2)} e você estar com obesidade I`
    } else if (imc < 39.9) {
        result.innerHTML = `${nome.value} seu IMC é ${imc.toFixed(2)} e você estar com obesidade II`
    } else{
        result.innerHTML = `${nome.value} seu IMC é ${imc.toFixed(2)} e você estar com obesidade III`
    }
    
}


