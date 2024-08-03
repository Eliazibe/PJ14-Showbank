//class -> replica uma estutura, cliente -> ira representar o cliente || dentro da classe vai os campos / atributos

import {cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new cliente('Bruno', 12332112312);
const cliente2 = new cliente('Alice', 1888888888);


const bancoBruno = new ContaCorrente( 1021, cliente1);
bancoBruno.depositar(1234); // deposito na conta corrente
const valorSacado = bancoBruno.sacar(58); //ira sacar da conta corrente o valor 



const bancoAlice = new ContaCorrente(1002, cliente2);

let valor = 250;
bancoBruno.tranferir(valor, bancoAlice);

console.log(ContaCorrente.numeroDeContas);


