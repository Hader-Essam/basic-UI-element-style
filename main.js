const toggleInput = document.querySelector('.switch input');

toggleInput.addEventListener('change', () => {
  if (toggleInput.checked) {
    document.body.classList.remove('light-mode');
  } else {
    document.body.classList.add('light-mode');
  }
});