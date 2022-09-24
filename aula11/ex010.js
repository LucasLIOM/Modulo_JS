var combustivelCarro = getRandomInt(0, 100)

// Função para número aleatório de 0 a 100
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// Condição simples
if (combustivelCarro == 0) {
    console.log('Seu carro está sem combustivel.')
}

// Condição composta
if (combustivelCarro <= 50){
    console.log('O combustivel do seu carro está acabando')
}else {
    console.log('Seu combustivel está cheio, aproveite!')
}