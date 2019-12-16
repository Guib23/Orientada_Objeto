class Mercadoria{
    totmac : number = 0;
    vmac : number = 0;
    total: number = 0;
    media: number = 0;
    i: number = 0;

  contagem() {

      this.totmac= Number(prompt("Qual o total de mercadorias:"))
      for (this.i = 1; this.i <= this.totmac; this.i++){
          this.vmac = Number(prompt("Qual o valor da " + this.i +"ª mercadoria:"))
          this.total += this.vmac; 
      }

      this.media = this.total / this.totmac;

    

}
}
let y = new Mercadoria();
y.contagem();
alert("O valor de mercadorias é " + y.total + " e a média dos valores é " + y.media + " . ")


nota =[];
