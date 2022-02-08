//songs array with images

songs = [
    ["./music/bas.mp3", "./music/mimages/i1.png", "bas ek baar tumko dekhane ko tarsu"],
    ["./music/chak.mp3", "./music/mimages/i2.png", "chak chak motyacha"],
    ["./music/s1.mp3", " ./music/mimages/i3.jpg", "honge tere chahane wale"],
    ["./music/s2.mp3", " ./music/mimages/i4.jpg", "ishare tere karti nigha"],
    ["./music/s3.mp3", " ./music/mimages/i5.jpg", "ashhhhahhah"],
    ["./music/s4.mp3", " ./music/mimages/i6.png", "ishq sufiyana"],
    ["./music/s5.mp3", " ./music/mimages/i7.jpg", "ishkachi nauka "],
];
//alert(songs.length);


//delacre song as audio
var audio = new Audio();


//get po as array index to increment and decremnt
let po = 0;

//set audio src by accsing array vaules 2darray
audio.src = songs[po][0];




//for milisec to min sec 
function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds - min * 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min}:${sec}`;
}


//for next song
function next() {


    if (po == songs.length - 1) {
        po = 0;
        impo = 0;
        audio.src = songs[po][0];
        playsong();
        audio.play();
        document.getElementById("mimg").style.animationPlayState = "running";
    } else {
        po++;
        audio.src = songs[po][0];
        document.getElementById("play1").value = "ON";
        playsong();

        audio.play();
        document.getElementById("mimg").style.backgroundImage =
            "url(" + songs[po][1] + ")";
        document.getElementById("mimg").style.animationPlayState = "running";
        document.getElementById("songnameid").innerText = "" + songs[po][2] + "";
    }
}


//for previous song
function previous() {

    if (po == 0) {

        po = songs.length - 1;




        audio.src = songs[po][0];
        document.getElementById("play1").value = "ON";
        playsong();
        document.getElementById("mimg").style.animationPlayState = "running";

    } else {

        po--;
        audio.src = songs[po][0];
        document.getElementById("play1").value = "ON";
        playsong();
        audio.play();
        document.getElementById("mimg").style.backgroundImage =
            "url(" + songs[po][1] + ")";
        document.getElementById("mimg").style.animationPlayState = "running";
        document.getElementById("songnameid").innerText = "" + songs[po][2] + "";
    }

}
//to play and pause songs

function playsong() {
    setInterval(showtime, 500);
    showtime();
    //    audio.play();
    if (document.getElementById("play1").value === "ON") {
        document.getElementById("plyicon").src = "./images/pause.png";

        // alert(songs[po][1]);
        document.getElementById("mimg").style.backgroundImage =
            "url(" + songs[po][1] + ")";
        document.getElementById("mimg").style.animationPlayState = "running";

        // songname.innerHTML = "" + songs[po][2] + "";
        document.getElementById("songnameid").innerText = "" + songs[po][2] + "";
        audio.play();

        document.getElementById("play1").value = "OFF";
    } else {
        document.getElementById("play1").value = "ON";
        document.getElementById("plyicon").src = "/images/play.png";
        audio.pause();
        document.getElementById("mimg").style.backgroundImage =
            "url(" + songs[po][1] + ")";
    }
}


//to show time songs while playing
function showtime() {
    let songtime = document.getElementById("songlength");
    let currenttime = document.getElementById("currentlength");
    let songbar = document.getElementById("vol"); //range in html

    //for milisec to min:sec
    currenttime.innerHTML = formatTime(Math.floor(audio.currentTime));
    songtime.innerHTML = formatTime(Math.floor(audio.duration));
    songbar.max = audio.duration;


    songbar.value = audio.currentTime;

    if (audio.currentTime == audio.duration) {
        document.getElementById("plyicon").src = "./images/play.png";
    }
}


//to show range moving according to song  current time
function changeProgressBar() {
    let songbar = document.getElementById("vol"); //range in html

    audio.currentTime = songbar.value;
}