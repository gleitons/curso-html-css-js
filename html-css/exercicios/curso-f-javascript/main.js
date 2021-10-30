function variaveisCompostas () {
 let    numeros = [32, 25, 35]
        // numeros[3] = 6
        // numeros.push(5)
        var posicao = numeros.sort()
        qtdVetor = numeros.length

        for (let pos = 0; pos < numeros.length; pos++) {
            numeros.sort()
            let element = numeros[pos];   
            
            mostrar.innerHTML += `${element} `
        }

        for (const pos in numeros) {
            mostrar3.innerHTML = `${numeros}`
        }
        
        let pos = numeros.indexOf(25)


   
    mostrar1.innerHTML = `Nomes = ${numeros} </br> Quantidade de vetor ${qtdVetor}<br>Em ordem Crescente ${posicao} </br> ${pos}`

}