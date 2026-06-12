function tabuada() {

    var num1 = Number(document.getElementById('n1').value)
    var i = 0

    for(i; i <= 10; i++){
        var conta = num1 * i

        document.getElementById('resposta').innerHTML += `${num1} X ${i} = ${conta}<br>`
    }

}