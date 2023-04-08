const loaderBtn = document.querySelector('.loader-btn');
const statusMessage = document.getElementById('status-message');
const typewriter = document.querySelector('.typewriter');

let typeTimer;
//Try learning more about linear regression next!
let typedText = "Recent work loaded into digital playground!\nScroll down to view";
let typedIndex = 0;

function typeWriterEffect() {
  if (typedIndex < typedText.length) {
    typewriter.textContent += typedText.charAt(typedIndex);
    typedIndex++;
    typeTimer = setTimeout(typeWriterEffect, 100);
  } else {
    setTimeout(() => {
      typewriter.style.borderRight = typewriter.style.borderRight === '0.15em solid #c7eeff' ? 'transparent' : '0.15em solid #c7eeff';
      blinkCaret();
    }, 500);
  }
}

function blinkCaret() {
  setTimeout(() => {
    typewriter.style.borderRight = typewriter.style.borderRight === '0.15em solid #c7eeff' ? 'transparent' : '0.15em solid #c7eeff';
    blinkCaret();
  }, 500);
}

function clearTypeWriterEffect() {
  clearTimeout(typeTimer);
  typedIndex = 0;
  typewriter.textContent = '';
  typewriter.style.borderRight = 'transparent';
}
const typewriterContainer = document.querySelector('.typewriter-container');

loaderBtn.addEventListener('mouseenter', () => {
  typewriterContainer.style.display = 'block';
  typeWriterEffect();
});

loaderBtn.addEventListener('mouseleave', () => {
  typewriterContainer.style.display = 'none';
  clearTypeWriterEffect();
});

