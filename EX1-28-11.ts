class Numero{
    soma: number= 0;
    n: number = 0;
    i: number = 0;


    calculo() {
        for (this.i = 0; this.i < 10; this.i++) {
            this.n = Number(prompt("Digite um numero:"))
            if (this.n < 40) {
                this.soma += this.n
            }
        }
    }
}
let x = new Numero();
x.calculo();
alert(x.soma)