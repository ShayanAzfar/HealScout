const dynamicText = document.querySelector("h1 span");
const words = ["Navigate", "Find", "Discover", "Locate"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;

  if (!isDeleting && charIndex < currentWord.length) {
    // If condition is true, type  the next character
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    // If condition is true, remove  the next character
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    // If word is detected then switch to the next word
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1100);
  }
};

typeEffect();

// Scroll Reveal Animation //

const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal(".text-box", { delay: 200, origin: "top" });
