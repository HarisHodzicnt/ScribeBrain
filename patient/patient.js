const handlePlay = () => {
    if(document.getElementById('mic').src.includes('mic-green'))
    {
        handleStop();
        return;
    }
    document.getElementById('mic').src = '../assets/mic-green.png';
    document.getElementById('scribebrain-record').src = '../assets/scribebrain-recording.png';
    addClass('show');
    removeClass('hide');
}

const handleStop = () => {
    document.getElementById('mic').src = '../assets/mic-red.png';
    document.getElementById('scribebrain-record').src = '../assets/scribebrain-not-recording.png';
    removeClass('show');
    addClass('hide');
}

const removeClass = (className) => {
    document.getElementById('bars').classList.remove(className);
    document.getElementById('bars2').classList.remove(className);
}

const addClass = (className) => {
    document.getElementById('bars').classList.add(className);
    document.getElementById('bars2').classList.add(className);
}