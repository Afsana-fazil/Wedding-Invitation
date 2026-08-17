
  const weddingDate = new Date("August 30, 2026 11:30:00").getTime();

  const countdown = setInterval(() => {

    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
      clearInterval(countdown);

      document.getElementById("countdown").innerHTML = `
        <div class="wedding-day">
          <span>♥</span>
          <p>Today is our special day!</p>
        </div>
      `;

      return;
    }

    const days = Math.floor(
      difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
      (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
      (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
      String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
      String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
      String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
      String(seconds).padStart(2, "0");

  }, 1000);





  