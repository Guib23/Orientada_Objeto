class Numeros{
    quantnum : number = 0;
    valor: number = 0;
    maior: number = 0;
    i: number = 0;
    z: string = ""; 


    contagem() {
        this.quantnum = Number(prompt("Digite a quantidade de números: "))

        for (this.i = 1; this.i <= this.quantnum; this.i++) {
            this.valor = Number(prompt("Digite o número:"))
            if (this.valor > this.maior) {
                this.maior = this.valor;
            }
        }
    }

      verifica(){
          if (this.maior % 2 == 0){
             this.z= "par"
      }
         else {
             this.z= "impar"
         }
}
}
let y = new Numeros();
y.contagem();
y.verifica();
alert("O maior número é " + y.maior + " e ele é " + y.z + " . ")
 