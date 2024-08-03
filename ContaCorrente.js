import { cliente } from "./Cliente.js"

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0; // # -> deixa o campo privado / Por padrão no JS utilizamos o "_" para indicar que um atributo é privado e não deveria ser alterado.


    set cliente(novoValor){
        if(novoValor instanceof cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

     //o parenteses representa quye isso e uma operacao, e que dentro do () ele ira receber valores
    sacar(valor){
        //se o saldo (this -> dessa) conta corrente e igual ou maior que o "valor", se for verdadeiro, o saldo (this. -> dessa) conta corrente sera alterado para subitrair o valor dele 
        if(this._saldo >= valor){
        this._saldo -= valor;
        return valor;
        }
    }

    depositar(valor){
        if(valor <= 0 ) return;

        this._saldo += valor;
    }

    tranferir(valor, conta){ // transferindo o valor para tal conta
        const valorSacado = this.sacar(valor); // sacar o valor da minha conta
        conta.depositar(valorSacado); // e depositar nessa conta

    }
}