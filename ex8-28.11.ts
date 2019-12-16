class Numero{
    posicoes: number[]
    constructor() {
        this.posicoes = [0, 1, 2, 3, 4]
        
    }
    Inserir(n: number) {
        this.posicoes.push(n)
    }
    Retirar() {
        this.posicoes.pop()
    }
    Mostrar() {
        return alert(`${this.posicoes}`)
    }

}
let nu = new Numero()

nu.Inserir(5)
nu.Retirar()
nu.Mostrar()