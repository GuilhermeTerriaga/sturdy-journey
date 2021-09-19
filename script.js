let x = [0.60, 1.40, 2.40, 3.30]; // inputado pelo usuário
let y = [1.5, 3.8, 25.0, 56.0]; // inputado pelu usuário

Math.logArray = (function() {
   return function(arrayInput) {
   let arrayOutput = [];
   if (arrayInput instanceof Array) {
      for (let i = 0; i < arrayInput.length; i++) {
         arrayOutput.push(Math.log10(arrayInput[i]));
      }
      return arrayOutput;
   }
   else{
      return null;
   }
 };
})();


Math.squareArray = (function() {
   return function(arrayInput) {
   let arrayOutput = [];
   if (arrayInput instanceof Array) {
      for (let i = 0; i < arrayInput.length; i++) {
         arrayOutput.push(arrayInput[i]**2);
      }
      return arrayOutput;
   }
   else{
      return null;
   }    
 };
})();

Math.multiplyArray = (function() {
   return function(firstArrayInput, secondArrayInput){
      let arrayOutput = [];
      if(firstArrayInput instanceof Array && secondArrayInput instanceof Array && secondArrayInput.length == firstArrayInput.length){
         for(let i = 0; i < firstArrayInput.length; i++){          
            arrayOutput.push(firstArrayInput[i]*secondArrayInput[i]);
         }
         return arrayOutput;
      }
      else{
         return null;
      }
   }
})();

Math.arraySum = (function(){
   return function(arrayInput){
      let arraySoma = 0;
      if(arrayInput instanceof Array){
         for (let i =0; i< arrayInput.length; i++){
            arraySoma +=arrayInput[i];
         }
         return arraySoma;
      }
      else{
         return null;
      }
   }
})();
let xiXi = x;
let xi = Math.arraySum(xiXi);
let yi = Math.logArray(y);
let xi2 = Math.squareArray(xiXi);
let xiyi = Math.multiplyArray(yi, xiXi);
let somaYi = Math.arraySum(yi);
let somaXi2 = Math.arraySum(xi2);
let somaXiyi = Math.arraySum(xiyi);
let countXixi = x.length;
let D = somaXi2 * countXixi - xi * xi;
let Da = somaXiyi * countXixi - somaYi * xi;
let Db = somaXi2 * somaYi - xi * somaXiyi;
let a = Da/D;
let b = Db/D;
let beta = Math.pow(10, a);
let alfa = Math.pow(10, b);
let xDeterminante = 2 /// precisa ser inputado pelo usuário;
let yAlfaBeta = alfa * Math.pow(beta, xDeterminante); 

console.log('x',x);
console.log('y',y);
console.log('xiXi', xiXi);
console.log('xi',xi);
console.log('yi',yi);
console.log('xi2', xi2);
console.log('xiyi',xiyi);
console.log('somayi', somaYi);
console.log('somaXi2', somaXi2);
console.log('somaXiyi', somaXiyi);
console.log('count Xixi', countXixi);
console.log('D', D);
console.log('Da', Da);
console.log('Db', Db);
console.log('a', a);
console.log('b', b);
console.log('alfa', alfa);
console.log('beta', beta);
console.log('y de alfa e beta', yAlfaBeta);