const fs = require('fs') // file system

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(data)
})

// importaremos um módulo do node: o file System;
// serve pra trabalhar com diretórios, arquivos e etc;
// ele é um Core Module, ou seja, não é necessário instalar;
// Podemos importa os módulos com a intrução import;