// Start...

    setInterval(function Loading(){

        // Elementos
        var body = window.document.getElementById('body')
        var section = window.document.getElementById('section')
        var txtUp = window.document.getElementById('txtUp')
        var imgPhoto = window.document.getElementById('imgPhoto')

        // Data/Hora/Minutos/Segundos
        let currentDate = new Date()
        let currentHour = currentDate.getHours()
        let currentMinutes = currentDate.getMinutes()
        let currentSeconds = currentDate.getSeconds()

        // Chama a função Time para que retorne a concatenação com minutos e segundos
        currentMinutes = Time(currentMinutes);
        currentSeconds = Time(currentSeconds);

        // Insere o horário em tempo real acima da imagem
        txtUp.innerHTML = `<strong> ${currentHour}:${currentMinutes}:${currentSeconds} </strong>`

        // Manhã
        if (currentHour >= 6 && currentHour < 12){
            imgPhoto.src = '../Images/photo_morning.webp'
            body.style.background = '#FFE4B5'
            section.style.background = '#FFDAB9'

        // Tarde
        } else if (currentHour >= 12 && currentHour < 18){
            imgPhoto.src = '../Images/photo_afternoon.webp'
            body.style.background = '#FF8C00'
            section.style.background = '#FF7F50'

        // Noite
        } else {
            imgPhoto.src = '../Images/photo_night.webp'
            body.style.background = '#1C1C1C'
            section.style.background = '#4F4F4F'

        }

    },1000)

    // A function Time concatena a String(número) 0 em frente aos números
    // mantendo o zero na frente dos números menores que 10. 
    function Time(x) {
        if (x < 10) {
            x = '0' + x;
        } return x;
    }