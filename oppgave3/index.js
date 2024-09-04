function countElements() {
  const input = document.getElementById('inputList').value;

  const elements = input.split(',').map(item => item.trim());

  const counts = elements.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
  }, {});

  let resultHTML = '<h2>Resultat:</h2>';
  for (const [element, count] of Object.entries(counts)) {
      resultHTML += `<p>${element}: ${count}</p>`;
  }

  document.getElementById('result').innerHTML = resultHTML;
}