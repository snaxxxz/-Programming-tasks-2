function findCommonDivisors(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return [];

  if (!numbers.every(num => typeof num === 'number' && num % 1 === 0 && num > 0)) {
    console.error("Ошибка: Введите только положительные целые числа, разделенные запятыми.");
    return []; // Или throw new Error(...) для более строгого управления ошибками
  }

  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  let commonGCD = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    commonGCD = gcd(commonGCD, numbers[i]);
  }

  let divisors = [];
  for (let i = 1; i <= Math.sqrt(commonGCD); i++) {
    if (commonGCD % i === 0) {
      divisors.push(i);
      if (i * i !== commonGCD) divisors.push(commonGCD / i);
    }
  }
  divisors.sort((a, b) => a - b);
  return divisors;
}


const calculateButton = document.getElementById('calculate');
const inputField = document.getElementById('numbers');

calculateButton.addEventListener('click', () => {
  const input = inputField.value;
  const numbers = input.split(',').map(Number);


  const result = findCommonDivisors(numbers);

  if (Array.isArray(result) && result.length > 0) {
    console.log(`Общие делители: ${result.join(', ')}`);
  }
});