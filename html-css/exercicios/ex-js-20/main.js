function contador() {
    let inicio = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('pas')
   
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Por favor insira os dados')
    } else {
      let  i = Number (inicio.value)
      var   f = Number(fim.value)
      var   p = Number(passo.value)

        for (let c = i; c <= f; c += p){
        res.innerHTML += `${c} `
        }
    }
}