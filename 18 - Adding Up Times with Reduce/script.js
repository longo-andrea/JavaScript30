const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(time => {
        [mins, secs] = time.split(':').map(parseFloat);
        return (mins * 60) + secs;
    })
    .reduce((total, vidSecs) => total + vidSecs);


let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);

secondsLeft %= 3600;

const minutes = Math.floor(secondsLeft / 60);

secondsLeft %= 60;

console.log(`Total duration of videos: ${hours} ${minutes} ${secondsLeft}`);
