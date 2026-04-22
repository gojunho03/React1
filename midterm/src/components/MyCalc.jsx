const MyCalc = ({ operand1, operand2, operator }) => {
  let result = 0;
  const num1 = operand1.value;
  const num2 = operand2.value;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : 'Error';
      break;
    default:
      result = 'Invalid Operator';
  }

  return (
    <div>
      <p>
        {num1} {operator} {num2} = <strong>{result}</strong>
      </p>
    </div>
  );
};

export default MyCalc;