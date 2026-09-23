function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function answer(choice) {
  const box = document.getElementById("answer");

  const messages = {
    me: "Correct answer. Finally, you admitted it. 😌😂❤️",
    you: "Nice try, Azhagiii. Very nice try. 😭😂🤍",
    both: "Okayyy... this is the only acceptable diplomatic answer. 😂🫶🏻"
  };

  box.textContent = messages[choice];

  for (let i = 0; i < 8; i++) {
    setTimeout(() => createHeart(), i * 100);
  }
}

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = ["♡", "♥", "✦", "♡"][Math.floor(Math.random() * 4)];
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.fontSize = `${14 + Math.random() * 20}px`;
  heart.style.animationDuration = `${2.7 + Math.random() * 2}s`;
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5500);
}

function makeHearts() {
  for (let i = 0; i < 25; i++) {
    setTimeout(createHeart, i * 80);
  }
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

setInterval(() => {
  if (Math.random() > 0.35) createHeart();
}, 3500);
