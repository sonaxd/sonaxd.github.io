// JavaScript for the 3D Torii Gate Animation
    const torii = document.getElementById('torii');
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      torii.style.transform = `translate(-50%, -50%) rotateY(${x}deg) rotateX(${-y}deg)`;
    });

    document.addEventListener("DOMContentLoaded", () => {
        let blurValue = 10;
        let saturationValue = 20;
        const body = document.body;
    
        function animate() {
            blurValue -= 0.5;
            saturationValue += 4;
            body.style.filter = `blur(${blurValue}px) saturate(${saturationValue}%)`;
    
            if (blurValue > 0) {
                requestAnimationFrame(animate);
            }
        }
    
        animate();
    });
    