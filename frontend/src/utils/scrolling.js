let  isScrolling = false;

document.addEventListener('wheel', (event) => {
    if(isScrolling) return;
    isScrolling = true;

    const direction = event.deltaY > 0 ? 1 : -1;
    const scrollAmount = window.innerHeight;
    const targetScroll = window.scrollY + scrollAmount * direction;

    smoothScrollTo(window.scrollY, targetScroll, 600, () => {
        isScrolling = false;
    });

    event.preventDefault();
}, { passive: false });

function smoothScrollTo(start, end, duration, callback) {
    const distance = end - start;
    const startTime = performance.now();

    function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, start + distance * easeInQutQuad(progress));

        if(progress < 1){
            requestAnimationFrame(step);
        }else if(callback) {
            callback();
        }
    }

    function easeInQutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(step);
}