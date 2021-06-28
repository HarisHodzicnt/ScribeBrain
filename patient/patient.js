const handlePlay = () => {
    document.getElementById('mic').src = '../assets/mic-green.png';
    document.getElementById('scribebrain-record').src = '../assets/scribebrain-recording.png';
}

const handleStop = () => {
    document.getElementById('mic').src = '../assets/mic-red.png';
    document.getElementById('scribebrain-record').src = '../assets/scribebrain-not-recording.png';
}