

/* var num1 = 10;
var num2 = 10;

document.writeln(num1==num2);
document.writeln("br",num1!=num2)
document.writeln("br",1 !="1")
document.writeln("br",1 === "1")


var idade=18;
var temCarteira=true
if(idade >=18 && temCarteira){
    document.writeln("pode dirigir");
}else{
    document.writeln("proibido dirigir");
}

var i;
for (i=0;i<10;i++)
document.write(<br>valor de i</br>)

//estrutura de funçao

function exibirMensagem(msg){
    alert("atençao");


} */

function calcular(){
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;

    switch(document.getElementById("operador").value){
        case '+':
            document.getElementById(resultado).value= num1 + num2;
            break;
        case '-':
            document.getElementById(resultado).value= num1 + num2;
            break;
        case '*':
            document.getElementById(resultado).value= num1 + num2;
            break;
        case '/':
            document.getElementById(resultado).value= num1 + num2;
            break;




    }



}