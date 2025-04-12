const messages = [
    "Definitely!",
    "Maybe...",
    "Nope.",
    "Why not?",
    "Sure thing!",
    "Ask again.",
    "Go for it!",
    "Sleep on it.",
    "Absolutely not.",
    "100% yes.",
  ];
  
  const messageEl = document.getElementById("message");
  document.body.addEventListener("click", () => {
    const random = Math.floor(Math.random() * messages.length);
    messageEl.style.opacity = 0;
    setTimeout(() => {
      messageEl.textContent = messages[random];
      messageEl.style.opacity = 1;
    }, 200);
  });
  
  