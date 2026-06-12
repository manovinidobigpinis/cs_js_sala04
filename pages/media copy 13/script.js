function media() {

    var num1 = parseFloat(document.getElementById('n1').value)
    var num2 = parseFloat(document.getElementById('n2').value)
    var num3 = parseFloat(document.getElementById('n3').value)

    var media = (num1 + num2 + num3) / 3

    document.getElementById('resposta').textContent = media

    console.log(media)
}