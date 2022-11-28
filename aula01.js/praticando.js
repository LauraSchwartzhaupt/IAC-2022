//Declarar uma variável, atribuir um valor numérico a ela. 
//Mostrar o valor e o tipo. Teste todos os tipos vistos em sala de aula.
var numero =  32;
mostrar("Chamada da função:O número escolhido da Variável é" + numero);

console.log("O número escolhido da Variável é" + numero)

mostrar("a soma é:" + somar(10,10));
//console.log(typeof(numero));
//var nomeDaPessoa = "Laura Schwartzhaupt";
//console.log("O nome da pessoa é" + nomeDaPessoa)
//console.log(typeof(nomeDaPessoa));
//console.log(typeof(false));
//console.log(typeof(null));

//Simule as notas de um aluno da Ulbra. AP1, AP2, AS e média final.
var ap1 = 1;
var ap2 = 2;
var as = 4;

var result = ap1 + ap2 + as;

//if binário
if(result >=7){
    mostrar("O aluno foi aprovado" + result)
}else{
    mostrar("reprovado");
}

//if ternário
var estaAprovado = (result >=7 ? true : false); //condição se verdadeiro

mostrar(estaAprovado);

//criando functions:escrevo função/coloco se tem argumentos(entradas)(informações que irá receber)entre parênteses e abro e fecho chaves!
//criando uma calculadora para somar dois números:
function somar(n1,n2){
    return n1 + n2;
}
//criando 
function mostrar(texto){
    console.log(texto);
}
//como fica uma função de conversão de qualquer base para decimal?

function qualquerBaseParaDecimal(numero, paraBase){
    return 'vai converter o número' + numero + 'da base' + paraBase;
}

//laço com for
function testFor(){
    for (let i = 0; i < 10; i++) {
        mostrar('elemento ' + (i*2));
    }
}
//i++ == i=i+1
//teste de mesa (pego a  variável que eu quero recorrer)
// i=0
//console
//elemento 0
//elemento 2
//elemento 4
//elemento ...

function testArray(){
    const cars = [];
    cars [0]="Saab";
    cars[1]="Volvo";
    cars[2]="BMW";

    mostrar("array da posicao 1" + cars[1]);

    for(i=0; i<cars.length; i++){
        mostrar("array da posicao" + i + cars[i]);
    }
}
//teste de mesa
//i=0; depois i=1; depois i=2; depois i=3;
//length=3;
//no console:array da posicao 0 é saab
//no console:"array da posicao 1 é volvo
//no console:array da posicao 2 é BMW
//no console: