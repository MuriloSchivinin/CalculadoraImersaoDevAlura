function calcValor(param1, param2) {

    let valorEmTela

    if (param1 == 'valor') {
        valorEmTela = document.getElementById('result').value + param2
        if ((param2 == '.' || param2 == '0.') && (valorEmTela == '.' || valorEmTela == '0.'))
            valorEmTela = '0.'

        document.getElementById('result').value = valorEmTela
    }

    else if (param1 == 'acao') {

        if (param2 == 'C') {
            valorEmTela = ''
            document.getElementById('result').value = valorEmTela
        }
        else if (param2 !== 'C' && param2 !== '=') {
            document.getElementById('result').value += param2
        }
        else if (param2 == '=') {
            let valorFinal = eval(document.getElementById('result').value)
            document.getElementById('result').value = valorFinal
        }
    }
}