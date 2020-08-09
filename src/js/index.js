import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import '../scss/main.scss';
import { sum } from './math';

const PLACEHOLDER_RESULT = '[ENTER NUMBERS TO SEE THE SUM]';

const firstNumberField = document.querySelector('.js-first-number');
const secondNumberField = document.querySelector('.js-second-number');
const resultContainer = document.querySelector('.js-sum-result');

function handleNumberChange() {
  const firstNumberValue = firstNumberField.value;
  const secondNumberValue = secondNumberField.value;

  if (firstNumberValue === '' || secondNumberValue === '') {
    resultContainer.textContent = PLACEHOLDER_RESULT;

    return;
  }

  resultContainer.textContent = sum(Number(firstNumberValue), Number(secondNumberValue));
}

firstNumberField.addEventListener('input', handleNumberChange);
secondNumberField.addEventListener('input', handleNumberChange);

handleNumberChange();
