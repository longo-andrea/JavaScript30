// Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playButton = player.querySelector('.player__button');
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = document.querySelectorAll('.player__slider'); 

// Functions
function toggleVideo() {
    video.paused ? video.play() : video.pause();
}

function updatePlayButton() {
    const icon = this.paused ? '⏵' : '⏸';
    playButton.textContent = icon;
}

function skipVideo() {
    const skipValue = this.dataset.skip;
    
    video.currentTime += parseFloat(skipValue);
} 

function rangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const progress = (video.currentTime / video.duration) * 100;

    progressBar.style.flexBasis = `${progress}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;

    video.currentTime = scrubTime;
}

// Hooks

video.addEventListener('click', toggleVideo);
playButton.addEventListener('click', toggleVideo);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => {
    button.addEventListener('click', skipVideo)
});

ranges.forEach(range => {
    range.addEventListener('change', rangeUpdate);
});

ranges.forEach(range => {
    range.addEventListener('mousemove', rangeUpdate);
});

let mousedown = false;

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

