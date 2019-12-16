interface IIntervalo{
    valor1: number ;
    valor2: number ;

    calculo(): void;
}


class Intervalo implements IIntervalo {
    valor1: number = Number(prompt("Digite um número:"));
    valor2: number = Number(prompt("Digite um número:"));
    par: number = 0;
    impar: number = 0;

    calculo() {

        while (this.valor1 <= this.valor2) {
            if (this.valor1 % 2 == 0) {
                this.par ++
            }
            else {
                this.impar ++

            }
            this.valor1 ++;
        }
    }
}
let y = new Intervalo();
y.calculo();
alert("Existem " + y.par + " números pares e " + y.impar + " números impares. ")