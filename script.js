X = [];
Y = [];
Xi = [];
Yi = [];
xiyi = [];

Math.logArray = (function() {
   return function(arrayInput) {
   let arrayOutput = [];
   if (arrayInput instanceof Array) {
      for (let i = 0; i < arrayInput.length; i++) {
         arrayOutput.push(Math.log(arrayInput[i]));
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



xiyi = Math.arraySum([1, 2, 3, 4, 5, 6]);
console.log(xiyi);