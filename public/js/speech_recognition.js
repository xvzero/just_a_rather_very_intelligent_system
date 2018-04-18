////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Speech Recognition section
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.textContent = transcript;

    if (e.results[0].isFinal) {

      if ((/(jarvis)(?!.*((don\'t)|(stop))).*(play)/i).test(transcript)) {
        crossCheckGoogle(transcript.match(/(play)(.*)/i)[2]);
      }

      // if ((/(jarvis)(?!.*((don\'t)|(stop))).*(pause)/i).test(transcript)) {
      //   pauseSong();
      // }

      // if ((/(jarvis)(?!.*(don\'t))(?!.*unmute).*(mute)/i).test(transcript)) {
      //   muteVolume();
      // }
      //
      // if ((/(jarvis)(?!.*(don\'t)).*(unmute)/i).test(transcript)) {
      //   unmuteVolume();
      // }
      //
      // if ((/(jarvis)(?!.*(don\'t)).*(skip).*(\d+).(seconds)/i).test(transcript)) {
      //   seekSong(transcript.match(/\d+/)[0]);
      // }
      //
      // if ((/((jarvis)(?!.*(don\'t)).*(skip|(go to)).*(start|beginning))|(jarvis).*(replay)/i).test(transcript)) {
      //   seekSong('begin');
      // }
      //
      // if ((/((jarvis)(?!.*(don\'t)).*(skip|(go to)).*(end))|(jarvis).*(stop)/i).test(transcript)) {
      //   seekSong('end');
      // }
      //
      // if ((/(jarvis)(?!.*(don\'t)).*((go back)|rewind).*(\d+).(seconds)/i).test(transcript)) {
      //   seekSong(transcript.match(/\d+/)[0]);
      // }
    }
});
recognition.addEventListener('end', recognition.start);
recognition.start();


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Soundcloud widget section
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


const SC = require('soundcloud');
const SoundcloudWidget = require('soundcloud-widget');

const axios = require('axios');
const apiKey = 'AIzaSyBY9vqgOQZCQqgnK57pCXdFKR0YPCk9zFc';

// const cx = '017515603852271078757:yjhxuxng8z0';
const cx = '017515603852271078757:mnwqv4gxmce';

SC.initialize({
  client_id: 'oFtM3fjLWICzaDucukME93LEYf0KIXKM'
});

let widget = new SC.Widget(document.querySelector('.audio-player'));
let volume;

function crossCheckGoogle(userInput) {
  userInput += ' soundcloud';
  const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${userInput}`;
  fetch(url).then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    playSong(myJson.items[0].formattedUrl);
    console.log(myJson.items[0].formattedUrl);
  });
}

function playSong(url) {
  let options = {
    auto_play: true,
    buying: false,
    liking: true,
    download: true,
    sharing: true,
    show_artwork: true,
    show_comments: false,
    show_playcount: true,
    show_user: true,
    start_track: 0
  };

  widget.load(url, options);
}

// function pauseSong() {
//   widget.isPaused(widget.pause());
// }
//
// function muteVolume() {
//   if (SCPlayer) {
//     volume = SCPlayer.getVolume();
//     SCPlayer.setVolume(0);
//   }
// }
//
// function unmuteVolume() {
//   if (SCPlayer) SCPlayer.setVolume(volume);
// }
//
// function seekSong(time) {
//   if (SCPlayer) {
//     if (time === 'begin') {
//       SCPlayer.seek(0);
//     } else if (time === 'end') {
//       SCPlayer.seek(SCPlayer.getDuration());
//     } else {
//       let currentTime = SCPlayer.currentTime();
//       currentTime += (time * 1000);
//
//       if (currentTime >= 0 && currentTime <= SCPlayer.getDuration())
//         SCPlayer.seek(currentTime);
//     }
//   }
// }
