const drumKeys = [65, 68, 70, 71, 72, 74, 75, 76, 83];

function keyHit(e) {
    if(drumKeys.includes(e.keyCode)) {
        document.querySelectorAll('[data-key]').forEach(function(element){
            if(element.dataset.key == e.keyCode) {
                if(element.tagName == 'DIV') 
                    element.classList.add('playing');
                if(element.tagName == 'AUDIO') {
                    element.currentTime = 0;
                    element.play();
                } 
            }
        });
    }
}

function keyRelease(e) {
    if(drumKeys.includes(e.keyCode)) {
        this.document.querySelectorAll('[data-key]').forEach(function(element){
            if(element.dataset.key == e.keyCode) {
                if(element.tagName == 'DIV')
                    element.classList.remove('playing');
                if(element.tagName == 'AUDIO')
                    element.pause();
            }
        });
    }
}

window.addEventListener('keydown', keyHit);
window.addEventListener('keyup', keyRelease);