

const progress=document.getElementById("progress")
const song=document.getElementById("song")
const CrtIcon=document.getElementById("CrtIcon")

song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}
function playPause(){
    if(CrtIcon.classList.contains("fa-circle-pause")){
        song.pause();
        CrtIcon.classList.remove("fa-circle-pause");
        CrtIcon.classList.add("fa-circle-play");
    }
    else{
        song.play();
        CrtIcon.classList.add("fa-circle-pause");
        CrtIcon.classList.remove("fa-circle-play");
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime;
    },500);
}
progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    CrtIcon.classList.add("fa-circle-pause");
    CrtIcon.classList.remove("fa-circle-play");
}