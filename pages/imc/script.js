function imc() {

    var peso = parseFloat(document.getElementById('n1').value)
    var altura = parseFloat(document.getElementById('n2').value)

    var imc = peso / (altura * altura)

    document.getElementById('resposta').textContent = imc

}