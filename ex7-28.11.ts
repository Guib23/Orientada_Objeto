class Vetor{
    n: number[] = []

    preenche(num: number) {
        this.n.push(num)
    }

    crescente() {
        return this.n.sort()
    } 

    decrescente() {
        return this.n.sort().reverse()
    }

    normal() {
        return this.n
    }
}

let n2 = new Vetor

while (true) {
    let escolhe = (prompt('Quer adicionar um número? [S/N]: '))
    if (escolhe === 'S') {
        n2.preenche(Number(prompt('Digite um número: ')))
    }

    else if (escolhe === 'N') {
         break
    }

    else {
         alert('Erro')
     }
}

let ordem = (`Os numeros do maior pro menor: ${n2.crescente()}`)
let reverso = (`Os números em ordem reversa: ${n2.decrescente()}`)
let normal = (`A ordem normal dos números: ${n2.normal()}`)
alert(`${ordem}\n${reverso}\n${normal}`)
