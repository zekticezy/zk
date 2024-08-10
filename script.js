window.addEventListener('load', () => {
    const video = document.getElementById('background-video');
    const content = document.getElementById('content');

    video.addEventListener('canplay', () => {
        video.play();
    });

    video.addEventListener('ended', () => {
        content.style.visibility = 'visible';
        video.style.display = 'none';
    });

    setTimeout(() => {
        if (video.paused || video.ended) {
            content.style.visibility = 'visible';
            video.style.display = 'none';
        }
    }, 5000);
});
