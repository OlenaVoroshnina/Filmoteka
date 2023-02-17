const stickyBtn = document.querySelector('.sticky');

function checkHeight() {
  if (window.scrollY > 200) {
    stickyBtn.classList.remove('visually-hidden');
  } else {
    stickyBtn.classList.add('visually-hidden');
  }
}
stickyBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
window.addEventListener('scroll', checkHeight);