const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');

const songs = [
    'Jingle-Bells-3(chosic.com).mp3',
    'Boney_M_-_Joy_to_the_World_(Jesusful.com).mp3',
    'United_States_Marine_Band_-_We_Wish_You_a_Merry_Christmas(chosic.com).mp3',
    'silent-night_medium-1-177552.mp3',
    'O-Come-All-Ye-Faithful-1.mp3'
];

let currentSongIndex = 0;

function playNextSong() {
    // Change the source of the audio element
    audioSource.src = songs[currentSongIndex];

    // Play the audio
    audioPlayer.load(); // Reload the audio element to apply the source change
    audioPlayer.play();

    // Move to the next song in the list
    currentSongIndex = (currentSongIndex + 1) % songs.length;
}
