// Elementos
var btnCheck = document.querySelector('.btnCheck')
var txtInfo = document.querySelector('.txtInfo')
var txtResult = document.querySelector('.txtResult')
var yearBirth = document.getElementById('yearBirth')
var checkSex = document.getElementsByName('checkSex')
var imgResult = document.createElement('img')

// Mensagens de erro.
let error_date = '<strong>ERRO!</strong></br>Ano inválido!'
let error_null = '<strong>ERRO!</strong></br>Preencha os campos obrigatórios!'
let error_not_number = '<strong>ERRO!</strong></br>Caractéres inválidos, utilize somente números.'
let error_not_checked = '<strong>ERRO!</strong></br>Escolha um gênero abaixo.'
let error_not_specify = '<strong>ERRO!</strong></br>Erro não especificado.'

// Eventos
btnCheck.addEventListener('click', FinalResult)
yearBirth.addEventListener('click', Default)

    function FinalResult(){
        
            var generSex = checkSex[0].checked ? "masculino" : "feminino" 
            
            const currentDate = new Date()
            const maxDate = currentDate.getFullYear()
            const minDate = (currentDate.getFullYear() - 172)
            const currentAge = Number(maxDate - yearBirth.value)
            
            try {

                if (yearBirth.value == ""){
                    ErrorIsNull()
                } else if (yearBirth.value < minDate || yearBirth.value > maxDate){
                    ErrorDate()
                } else if (isNaN(yearBirth.value)){
                    ErrorNotNumber()
                } else if (!checkSex[0].checked && !checkSex[1].checked) {
                    ErrorNotChecked()
                } else {
                    
                    if (checkSex[0].checked){
                        imgResult.setAttribute('src', '../Images/photo_masculine_simbol.png')
                    }else {
                        imgResult.setAttribute('src', '../Images/photo_feminine_simbol.png')
                    }
                    
                    txtResult.innerHTML = `Você tem <strong>${currentAge}</strong> anos e é do sexo <strong>${generSex}</strong><br>`
                    txtResult.appendChild(imgResult)
                    
                }
            } catch (Exception){
                ErrorNotSpecify()
            }
    }
    
    function Default() {
        txtInfo.innerText = 'Preencha abaixo as informações!'
        txtInfo.style.color = 'black'
        yearBirth.style.color = 'black'
        yearBirth.value = null
    }
    
    function ErrorDate() {
        yearBirth.style.color = 'red'
        txtInfo.style.color = 'red'
        txtInfo.innerHTML = error_date
    }
    
    function ErrorIsNull() {
        yearBirth.style.color = 'red'
        txtInfo.style.color = 'red'
        txtInfo.innerHTML = error_null
    }
    
    function ErrorNotNumber() {
        yearBirth.style.color = 'red'
        txtInfo.style.color = 'red'
        txtInfo.innerHTML = error_not_number
    }

    function ErrorNotChecked() {
        checkMasculine.style.color = 'red'
        checkSex[1].style.color = 'red'
        txtInfo.style.color = 'red'
        txtInfo.innerHTML = error_not_checked
    }
    
    function ErrorNotSpecify() {
        yearBirth.style.color = 'red'
        txtInfo.style.color = 'red'
        txtInfo.innerHTML = error_not_specify
    }