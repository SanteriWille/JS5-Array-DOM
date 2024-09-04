document.getElementById('btn').addEventListener('click', function() {
  const input = document.getElementById('input');
  const list = document.getElementById('list');
  
  const li = document.createElement('li');
  li.textContent = input.value.trim();

  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'fas fa-times';
  deleteIcon.addEventListener('click', function() {
    list.removeChild(li);
  });

  li.appendChild(deleteIcon);

  list.appendChild(li);

  input.value = '';
});
