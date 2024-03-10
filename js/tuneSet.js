$(document).ready(function() {
    var audio = new Audio('tune/blTune.mp3');
    var isPlaying = false;

    // Function to play or pause music
    function toggleMusic() {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        isPlaying = !isPlaying;
    }

    // Set the icon as a clickable element
    $("#tuneSet").css("cursor", "pointer");

    // Click event to trigger music play/pause
    $("#tuneSet").click(function() {
        toggleMusic();
    });
});
