const container = document.querySelector('.container');
const text = document.getElementById('text');

const animationTime = 10000;
const breathingTime = (animationTime / 5) * 2;
const holdTime = animationTime / 5;

relaxer();

function relaxer() {
  text.textContent = 'Breathe In!';
  container.className = 'container bubble';

  setTimeout(() => {
    text.textContent = 'Hold';

    setTimeout(() => {
      text.textContent = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breathingTime);
}

setInterval(relaxer, animationTime);
