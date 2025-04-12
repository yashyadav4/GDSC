const grid = document.getElementById("grid");

        for (let i = 0; i < 2000; i++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            grid.appendChild(pixel);
        }

        const pixels = document.querySelectorAll(".pixel"); // Get all pixel divs
        const colors = ["#EA4335", "#34A853", "#4285f4", "yellow"];
        const originalColor = "#222"; // Match the original color

        // pixels.forEach(pixel => {
        //     pixel.addEventListener("mouseenter", () => {
        //         let randomColor = colors[Math.floor(Math.random() * colors.length)];
        //         pixel.style.backgroundColor = randomColor;

        //         setTimeout(() => {
        //             pixel.style.backgroundColor = originalColor;
        //         }, 2000);
        //     });
        // });

        const colorCount = {};
        pixels.forEach(pixel => {
            pixel.addEventListener("mouseenter", () => {
                let randomColor = colors[Math.floor(Math.random() * colors.length)];
                pixel.style.backgroundColor = randomColor;
        
                // Update color count
                colorCount[randomColor] = (colorCount[randomColor] || 0) + 1;
        
                // Check if any color appears in 4 or more boxes
                for (let color in colorCount) {
                    if (colorCount[color] >= 4) {
                        // If a color appears in 4 boxes, change them to a new random color
                        let newColor;
                        do {
                            newColor = colors[Math.floor(Math.random() * colors.length)];
                        } while (newColor === color); // Ensure it's a different color
        
                        document.querySelectorAll(".pixel").forEach(p => {
                            if (p.style.backgroundColor === color) {
                                p.style.backgroundColor = newColor;
                                colorCount[color]--; // Reduce old color count
                                colorCount[newColor] = (colorCount[newColor] || 0) + 1;
                            }
                        });
                    }
                }
        
                setTimeout(() => {
                    pixel.style.backgroundColor = "#222"; // Reset color after 2s
                    colorCount[randomColor]--; // Update count after reset
                }, 2000);
            });
        });



// ===============================================================================

function fadeInOnScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 50) {
            section.classList.add('visible');
        }
    });
}
document.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll();


// =======================================================================
const names = ["Team GridGang", "Yash yadav", "Kanha Agarwal"];
const typedText = document.getElementById("typed-text");

let nameIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  const currentName = names[nameIndex];

  if (typing) {
    if (charIndex < currentName.length) {
      typedText.textContent += currentName.charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 150);
    } else {
      typing = false;
      setTimeout(typeEffect, 1000); // Pause before deleting
    }
  } else {
    if (charIndex > 0) {
      typedText.textContent = currentName.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, 100);
    } else {
      typing = true;
      nameIndex = (nameIndex + 1) % names.length;
      setTimeout(typeEffect, 500);
    }
  }
}

typeEffect();
