import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import '../scss/main.scss';
import { sum } from './math';

const PLACEHOLDER_RESULT: string = '[ENTER NUMBERS TO SEE THE SUM]';

const firstNumberField: HTMLInputElement = document.querySelector('.js-first-number');
const secondNumberField: HTMLInputElement = document.querySelector('.js-second-number');
const resultContainer: HTMLSpanElement = document.querySelector('.js-sum-result');

function handleNumberChange(): void {
  const firstNumberValue: string = firstNumberField.value;
  const secondNumberValue: string = secondNumberField.value;

  if (firstNumberValue === '' || secondNumberValue === '') {
    resultContainer.textContent = PLACEHOLDER_RESULT;

    return;
  }

  resultContainer.textContent = '' + sum(Number(firstNumberValue), Number(secondNumberValue));
}

firstNumberField.addEventListener('input', handleNumberChange);
secondNumberField.addEventListener('input', handleNumberChange);

handleNumberChange();
