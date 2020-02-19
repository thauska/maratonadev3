// logica de fazer um café
const cor = "branco"
const tamanho = 2.5

function verificarCopoSujo(sujo) {
    //logica para verificar se o copo está sujo
    return `o copo: ${sujo}`
}

const copo = {
    cor,
    tamanho,
    verificarCopoSujo
}

console.log(copo.verificarCopoSujo("não está sujo"))
console.log(copo.verificarCopoSujo("está sujo"))