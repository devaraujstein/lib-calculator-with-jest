module.exports.sumTwoNumbers = (numberOne, numberTwo) => {

  // The plus signal before 'numberOne' and 'numberTwo' convert string value to integer
  // like parseInt(n) and Number(n),
  // If receive a empty string '+' convert it to zero and parseInt to NaN;

  return forceValueToBeAInteger(numberOne) + forceValueToBeAInteger(numberTwo);
}

const forceValueToBeAInteger = (value) => {
  
  value = parseInt(value, 10);

  if(Number.isNaN(value)){
    throw new Error('Please check your input');
  }

  return value;
}