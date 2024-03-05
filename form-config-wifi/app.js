const sign_in_btn = document.querySelector('#res-btn');
const sign_up_btn = document.querySelector('#res-btn');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
  container.classList.add('res-mode');
});

sign_in_btn.addEventListener('click', () => {
  container.classList.remove('unresmode');
});
