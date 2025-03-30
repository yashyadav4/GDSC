const grid = document.getElementById("grid");

        for (let i = 0; i < 2000; i++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            grid.appendChild(pixel);
        }

        const pixels = document.querySelectorAll(".pixel");
        const colors = ["green"];
        const originalColor = "#222";
       
          pixels.forEach((pixel) => {
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            pixel.style.backgroundColor = randomColor;

            setTimeout(() => {
              pixel.style.backgroundColor = originalColor;
            }, 2000);
          });




