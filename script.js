let isPaused = false;
const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('touchstart', () => {
  if (!isPaused) {
    isPaused = true;
    wrapper.style.animationPlayState = 'paused';
  } else {
    isPaused = false;
    wrapper.style.animationPlayState = 'running';
  }
});
