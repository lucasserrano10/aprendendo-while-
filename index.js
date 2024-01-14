// informações que o usuário não vai dar

let saldo = 1000
let totalTransaçoes = 0


//variaveis para fazer o sistema funcionar
let continuar = true


do{
    const nome = prompt("Qual é o seu nome ?")
    const cpf = Number(prompt("CPF :"))
    const valor = Number(prompt("Digite o valor da transação :"))
    const operação = (prompt("qual operação deseja fazer ? (s/d)"))
    let prosseguir = (prompt(" se deseja encerrar tecle sim "))

    if(valor > saldo){
        console.log("operação inválida")

    }else if (operação == "s"){ 
        let saque = saldo - valor
        console.log(saque)
        console.log(nome + ">" + "de cpf" +  "<" + ">" + cpf + "<" +  ">" + "seu saldo após a transação esta acima da mensagem")
        totalTransaçoes++

    }else if (operação == "d"){
        let deposito = saldo + valor
        console.log(nome + "de cpf" + "=" + cpf + "seu saldo após a transação é" + "=" + deposito)
        totalTransaçoes++

    }else if(prosseguir == "sim"){
        continuar = false
    }else  {
        continuar = true
    }

   

}while (continuar = false){
   console.log("o total de transações feita é de" + ":" + totalTransaçoes)
    console.log("Nossa instituição agradece")
}
  

