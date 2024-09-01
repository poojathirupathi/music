document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const currentTimeElement = document.getElementById('current-time');
    const durationElement = document.getElementById('duration');

    // Array of tracks
    const tracks = ['track1.mp3', 'track2.mp3', 'track3.mp3'];
    let currentTrackIndex = 0;

    function updateTime() {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        currentTimeElement.textContent = formatTime(currentTime);
        durationElement.textContent = formatTime(duration);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    prevButton.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        audio.src = tracks[currentTrackIndex];
        audio.play();
        playPauseButton.textContent = 'Pause';
    });

    nextButton.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        audio.src = tracks[currentTrackIndex];
        audio.play();
        playPauseButton.textContent = 'Pause';
    });

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateTime);

    // Initialize player
    audio.src = tracks[currentTrackIndex];
});
