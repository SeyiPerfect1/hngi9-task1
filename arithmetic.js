const arithmeticEnum = Object.freeze({
  addition: "addition",
  subtraction: "substraction",
  multiplication: "multiplication",
});

function arithmetic(operation_type_input,x,y){
  let result = 0
  switch(operation_type_input){
      case arithmeticEnum.addition:
           result = x + y
          break
      case arithmeticEnum.subtraction:
          result = x - y
          break
      case arithmeticEnum.multiplication :
          result = x * y
          break
      default: 
          result = 0;
          break
  }    
  return result
}          

module.exports = {
  arithmeticEnum,
  arithmetic  
}
