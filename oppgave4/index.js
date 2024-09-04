const colorList = document.getElementById('colorList');
const colorInput = document.getElementById('colorInput');
const addColorButton = document.getElementById('addColorButton');

function createColorItem(color) {
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('color-item');
    colorDiv.style.backgroundColor = color;
    colorDiv.title = color;
    colorDiv.addEventListener('click', () => {
        document.body.style.backgroundColor = color;
    });
    return colorDiv;
}

function addColor() {
    const color = colorInput.value.trim();
    if (color) {
        colorList.appendChild(createColorItem(color));
        colorInput.value = '';
    }
}

addColorButton.addEventListener('click', addColor);

colorInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addColor();
    }
});