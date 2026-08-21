document.addEventListener("DOMContentLoaded", () => {

  if (window.__weddingInit) return;
  window.__weddingInit = true;

  // ---- Countdown ----
  const weddingDate = new Date("August 30, 2026 11:30:00").getTime();
  const countdownEl = document.getElementById("countdown");
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateCountdown() {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
      clearInterval(countdown);
      if (countdownEl) {
        countdownEl.innerHTML = `
          <div class="wedding-day">
            <span>♥</span>
            <p>Today is our special day!</p>
          </div>
        `;
      }
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  const countdown = setInterval(updateCountdown, 1000);

 //music section
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = document.getElementById('musicIcon');
    const weddingAudio = document.getElementById('weddingAudio');

    let isPlaying = true; 
    musicIcon.textContent = '🔊';

    function attemptAutoplay() {
        weddingAudio.play().catch(() => {
            // Browser blocked autoplay silently — icon still shows 🔊
            // Music will actually start on the user's first interaction
            const startOnFirstInteraction = () => {
                if (isPlaying) {
                    weddingAudio.play().catch(() => {});
                }
                document.removeEventListener('click', startOnFirstInteraction);
            };
            document.addEventListener('click', startOnFirstInteraction, { once: true });
        });
    }

    attemptAutoplay();

    // Toggle button click handler
    musicToggle.addEventListener('click', (e) => {
        e.stopPropagation();

        if (isPlaying) {
            weddingAudio.pause();
            musicIcon.textContent = '🔇';
            isPlaying = false;
        } else {
            weddingAudio.play().catch((err) => console.warn('Playback failed:', err));
            musicIcon.textContent = '🔊';
            isPlaying = true;
        }
    });


     const letters = document.querySelectorAll(".seal-inner span");
const splash = document.querySelector(".splash-envelope");

letters.forEach(letter => {
    letter.addEventListener("click", () => {
        splash.classList.add("opening");
    });
});
});