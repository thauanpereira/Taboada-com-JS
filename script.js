function taboada() {
    let num = document.getElementById('numid')
    let tab = document.getElementById('selid')

    if (num.value.length == 0) {
        window.alert ('Por favor, digite um número')
    } else {
        n = Number(num.value)
        tab.innerHTML = ''
        for (c=1; c<=10; c++){
            let item = document.createElement ('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}