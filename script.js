const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('error while requesting navigator media devices', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    try {
        await videoElement.requestPictureInPicture();
    } catch (error) {
        console.log('error while requesting picture-in-picture', error);
    }
    // Reset Button
    button.disabled = false;
});

// On Load
selectMediaStream();
