console.log("webpack working");

function divideAndFloor(num1, num2) {
  if(!num1 || !num2) {
    throw new Error ('A number is missing');
  }
  if(isNaN(num1) || isNaN(num2)) {
    throw new Error ('All parameters must be a number');
  }
  if(num2 === 0) {
    throw new Error ('Second number must be greater than zero');
  } 
  
  return answers = {
    "result": num1/num2,
    "remainder": num1 % num2,
    "dividesEvenly": num1/num2 % 2 === 0
   }
  }
  
  module.exports = divideAndFloor;