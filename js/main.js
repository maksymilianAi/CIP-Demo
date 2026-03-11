// Timer
let totalSeconds = 3 * 60;
const timerEl = document.getElementById('timer');

function pad(n) { return String(n).padStart(2, '0'); }

function tick() {
  if (totalSeconds <= 0) {
    timerEl.textContent = '00:00';
    timerEl.classList.add('urgent');
    clearInterval(timerInterval);
    window.location.href = 'timeout.html';
    return;
  }
  totalSeconds--;
  timerEl.textContent = pad(Math.floor(totalSeconds / 60)) + ':' + pad(totalSeconds % 60);
  if (totalSeconds <= 60) timerEl.classList.add('urgent');
}

const timerInterval = setInterval(tick, 1000);

// Next button
function goNext() {
  const allAnswered = ['q1', 'q2', 'q3', 'q4'].every(
    name => document.querySelector(`input[name="${name}"]:checked`)
  );
  if (!allAnswered) {
    document.getElementById('errorMsg').classList.add('visible');
    return;
  }
  clearInterval(timerInterval);
  window.location.href = 'document-upload.html';
}

// Mobile sidebar
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
  document.body.style.overflow = '';
}
