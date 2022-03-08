function Converter() {
    var valorElemento = document.getElementById("valor"); // id definido no index.html
    //tbm recebe o valor do input e guarda na variável valorElemento
    var valor = valorElemento.value;
    var valorDolar = 5;
    var valorEmDolarNumerico = parseFloat(valor) / valorDolar; // transforma o input para float
    console.log(valorEmDolarNumerico);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em dólar é R$ " + valorEmDolarNumerico;
    elementoValorConvertido.innerHTML = valorConvertido; //valorConvertido está caracterizado como h2 no index.html
}