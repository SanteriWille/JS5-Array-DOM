const inputMin = document.getElementById('inputMin');
const inputMax = document.getElementById('inputMax');
const button = document.getElementById('btn');

function generateRandomNumber() {
  const min = parseInt(inputMin.value, 10);
  const max = parseInt(inputMax.value, 10);

  if (isNaN(min) || isNaN(max) || min >= max) {
    alert('Vennligst oppgi gyldige tall der min er mindre enn max.');
    return;
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  let resultParagraph = document.getElementById('result');
  if (!resultParagraph) {
    resultParagraph = document.createElement('p');
    resultParagraph.id = 'result';
    document.body.appendChild(resultParagraph);
  }
  resultParagraph.textContent = `Tilfeldig tall: ${randomNumber}`;
}

button.addEventListener('click', generateRandomNumber);
