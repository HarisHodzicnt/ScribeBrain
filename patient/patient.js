const handlePlay = () => {
    if(document.getElementById('mic').src.includes('mic-green'))
    {
        handleStop();
        return;
    }
    document.getElementById('mic').src = '../assets/mic-green.png';
    document.getElementById('scribebrain-record').src = '../assets/scribebrain-recording.png';
    addClass('bars', 'show');
    removeClass('bars', 'hide');
    addClass('circle', 'rotating');
}

const handleStop = () => {
    document.getElementById('mic').src = '../assets/mic-red.png';
    document.getElementById('scribebrain-record').src = '../assets/scribebrain-not-recording.png';
    removeClass('bars','show');
    removeClass('circle','rotating');
    addClass('bars', 'hide');
}

const removeClass = (id, className) => {
    if(id === 'bars') {
        document.getElementById('bars').classList.remove(className);
        document.getElementById('bars2').classList.remove(className);
    }
    else if (id === 'circle') {
        document.getElementById('rotating-circle').classList.remove(className);
    }
}

const addClass = (id, className) => {
    if(id === 'bars') {
        document.getElementById('bars').classList.add(className);
        document.getElementById('bars2').classList.add(className);
    }
    else if (id === 'circle') {
        document.getElementById('rotating-circle').classList.add(className);
    }
}