class Lista{
    aluno : number[] = [1,2,3,4,5,6,7,8,9,10];
    x: number = 0;
    total: number = 0;
   

    verifica() {
        this.x = Number(prompt("Digite um número:"))
    this.total = this.aluno.indexOf(this.x)
    }
}
let y = new Lista();
y.verifica();
alert("Ele está na posição " + y.total)
 