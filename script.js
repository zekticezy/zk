window.addEventListener('load', () => {
    const video = document.getElementById('background-video');
    const content = document.getElementById('content');

    video.addEventListener('ended', () => {
        content.style.visibility = 'visible';
        video.style.display = 'none';
    });
});