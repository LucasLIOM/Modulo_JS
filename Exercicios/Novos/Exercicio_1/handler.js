var nanoResult = document.querySelector('.nano-result')
var nanoNumber = document.querySelector('.nano-number')
var inputTable = document.querySelector('.input-table')

var getValue = nanoResult.value

inputTable.addEventListener('keydown', evento => {

    if (evento.key == "Enter"){
        nanoResult.innerHTML = null
        for(var x = 1; x <= 15 ; x++){
            nanoResult.innerHTML += `${inputTable.value} X ${x} = ${inputTable.value * x}<br>`
        }

        nanoResult.style.fontFamily = 'Times New Roman, Times, serif'
        nanoResult.style.color = 'white'
        nanoResult.style.fontSize = '15pt'
        nanoResult.style.textAlign = 'center'
        nanoResult.style.background = 'pink'
        nanoResult.style.borderRadius = '10px'
        nanoResult.style.padding = '15px'
        nanoResult.style.width = '500px'
        nanoResult.style.margin = 'auto'
        nanoResult.style.marginTop = '10px'
        nanoResult.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.433)'
    }
})
