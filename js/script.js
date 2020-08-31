const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
const list = document.getElementById('list');

function addButtons(li) {
  let up = document.createElement('BUTTON');
  up.className = 'up';
  up.innerHTML = 'Up';
  li.appendChild(up);

  let down = document.createElement('BUTTON');
  down.className = 'down';
  down.innerHTML = 'Down';
  li.appendChild(down);

  let remove = document.createElement('BUTTON');
  remove.className = 'remove';
  remove.innerHTML = 'Remove';
  li.appendChild(remove);
}

addButton.addEventListener('click', () => {
  let li = document.createElement('LI');
  li.innerHTML = input.value;
  input.value = '';
  list.appendChild(li);
  addButtons(li);
})

list.addEventListener('click', (event) => {
  let li = event.target.parentNode;
  let preLi = li.previousElementSibling;
  let nextLI = li.nextElementSibling;
  if (event.target.className == 'up') {
    if (preLi != null) {
      list.insertBefore(li, preLi);
    }
  } else if (event.target.className == 'down') {
    if (nextLI != null) {
      list.insertBefore(nextLI, li);
    }
  } else if (event.target.className == 'remove') {
    li.remove();
  }
})
