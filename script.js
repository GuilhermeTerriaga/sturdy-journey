let x = [0.60, 1.40, 2.40, 3.30];
let y = [1.5, 3.8, 25.0, 56.0];

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
let xi = Math.arraySum(x);
let yi = Math.logArray(y);
let xi2 = Math.squareArray(x);
let xiyi = Math.multiplyArray(yi, x);
let somaYi = Math.arraySum(yi);
let somaXi2 = Math.arraySum(xi2);
let somaXiyi = Math.arraySum(xiyi);


console.log('x',x);
console.log('y',y);
console.log('xi',xi);
console.log('yi',yi);
console.log('xi2', xi2);
console.log('xiyi',xiyi);
console.log('somayi', somaYi);
console.log('somaXi2', somaXi2);
console.log('somaXiyi', somaXiyi);