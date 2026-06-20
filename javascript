    const phrases = [
      'Frontend Developer',
      'UI/UX Enthusiast',
      'Open Source Contributor',
      'Problem Solver',
    ];
    let phraseIndex = 0, charIndex = 0, deleting = false;
    const el = document.getElementById('typed');
 
    function type() {
      const current = phrases[phraseIndex];
      if (!deleting) {
        el.textContent = current.slice(0, ++charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        el.textContent = current.slice(0, --charIndex);
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      setTimeout(type, deleting ? 55 : 95);
    }
    type();