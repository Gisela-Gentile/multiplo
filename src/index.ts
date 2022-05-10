import "./styles.css";
let resultado: string = "";
let numero: number;
//console.log ("los numeros multiples de 2 y 3 son:")

for (numero = 1; numero <= 100; numero++) {
  if (numero % 2 === 0 || numero % 3 === 0) {
    //console.log(+numero);
    resultado = resultado + numero + "  ";
  }
}
console.log("los numeros multiples de 2 y 3 son: " + resultado);
