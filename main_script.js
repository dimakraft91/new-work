<script>
  const orderForm = document.getElementById("order");
  const timerElement = document.getElementById("timer");
  const timing = 5; // secondes avant d'afficher le formulaire
  let formShown = false;
  let video = document.querySelector("video");

  if (localStorage.getItem("orderShown") === "true") {
    showOrderForm();
  }

  if (video) {
    attachVideoEvents(video);
  } else {
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.tagName === "VIDEO") {
            video = node;
            attachVideoEvents(video);
            observer.disconnect();
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
  

  function attachVideoEvents(video) {
    video.addEventListener("timeupdate", () => {
      if (!formShown && Math.floor(video.currentTime) >= timing) {
        formShown = true;
        showOrderForm();
      }
    });
  }

  function showOrderForm() {
    orderForm.style.display = "block";
    localStorage.setItem("orderShown", "true");
    startCountdown(600); // 10 minutes
  }

  function startCountdown(durationInSeconds) {
    if (!timerElement) return;

    let timeLeft = durationInSeconds;

    const interval = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerElement.textContent = `${minutes}:${seconds
        .toString()
        .padStart(2, "0")}`;

      if (timeLeft <= 0) {
        clearInterval(interval);
      }

      timeLeft--;
    }, 1000);
  }
</script>