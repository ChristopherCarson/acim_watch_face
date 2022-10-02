// MIT License - Christopher Carson 2022

var STOR = require("Storage");

const locale = require("locale");

const miracleArray = eval(STOR.read('miracles.js'));

let showClock = true;

var W = g.getWidth();
var H = g.getHeight();
var scale = W / 240;

const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes;
    return strTime;
};

function drawClock() {
    var now = Date();
    d = now.toString().split(' ');
    g.reset();
    g.clearRect(0, 24, W - 1, H - 1);
    g.setColor(g.theme.fg);
    g.setFontAlign(0, -1);
    g.setFontVector(80 * scale);
    g.drawString(formatAMPM(now), 4 + W / 2, H / 2 + 24 - 80 * scale);
    g.setFontVector(36 * scale);
    g.setColor(g.theme.fg2);
    d[1] = locale.month(now, 3);
    d[0] = locale.dow(now, 3);
    var dt = d[0] + " " + d[1] + " " + d[2];
    g.drawString(dt, W / 2, H / 2 + 24);
    g.flip();
}

const formatTextWrap = (text, maxLineLength) => {
    const words = text.replace(/[\r\n]+/g, ' \n').split(' ');
    //const words = text.split(' ');
    let lineLength = 0;

    // use functional reduce, instead of for loop 
    return words.reduce((result, word) => {
        if (word.includes('\n')) {
            lineLength = word.length - 2;
            return result ? result + ` ${word}` : `${word}`; // add space only when needed
        }
        else if (lineLength + word.length >= maxLineLength) {
            lineLength = word.length;
            return result + `\n${word}`; // don't add spaces upfront
        } else {
            lineLength += word.length + (result ? 1 : 0);
            return result ? result + ` ${word}` : `${word}`; // add space only when needed
        }
    }, '');
};

let backToClock = 0;
let scroll = 0;
let pause = 20;
let textWrapped = '';
let count;

const drawLesson = () => {

    g.setFont12x20();

    g.setColor(0, 0, 0);
    g.fillRect(0, 0, 176, 176);

    g.setColor(1, 1, 1);

    g.drawString(textWrapped, 5, 5 + scroll, false);

    pause = pause - 1;

    if (pause < 0 && count > 7) {
        scroll = scroll - 1;
    }

    if (scroll < -(count + 2) * 20) {
        scroll = 0;
        pause = 60;
    }

    backToClock = backToClock - 1;
    if (backToClock < 0){
      showClock = true;
      clock();
    }
};

g.clear();

let clockInterval;
let drawInterval;

function clock() {
    if (clockInterval) {
        clearInterval(clockInterval);
    }
    if (drawInterval) {
        clearInterval(drawInterval);
    }
    if (showClock) {
        g.reset();
        g.setColor(0, 0, 0);
        g.fillRect(0, 0, 176, 176);
        drawClock();
        clockInterval = setInterval(drawClock, 60000);
        Bangle.loadWidgets();
        Bangle.drawWidgets();
    } else {
        g.reset();
        backToClock = 400;
        scroll = 0;
        pause = 20;
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = now - start;
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);

        textWrapped = formatTextWrap(miracleArray[day - 1], 17);
        count = (textWrapped.match(/\n/g) || []).length;

        drawInterval = setInterval(drawLesson, 10);
    }

}

Bangle.on('touch', () => {
    showClock = !showClock;
    clock();
});

Bangle.setUI("clock");

clock();


