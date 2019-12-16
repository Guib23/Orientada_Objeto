class Nota{
    aluno : number[] = [];
    i: number = 0;
    x: number = 0;
    total: number = 0;
    maior: number = 0;

    calculo() {
        for (this.i = 0; this.i < 5; this.i++) {
            this.aluno[this.i] = Number(prompt("Digite a nota:"))
        }
    }


    media() {
        for (this.i = 0; this.i < 5; this.i++) {
            this.total += this.aluno[this.i]
        }
        this.x = this.total / 5
    }

    
verifimaior(){
   for (this.i = 0; this.i < 5; this.i++){
       if (this.aluno[this.i] >= this.x ) {
           this.maior++;
         }
     }
}
}
let y = new Nota();
y.calculo();
y.media();
y.verifimaior();
alert("A quantidade de alunos acima da média é " + y.maior + " e a media é " + y.x + " . ")
 