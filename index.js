

function configVideo(id){
    const video = document.getElementById(id);
    video.oncontextmenu = ()=> false; //block the download

    document.querySelector(`[button-play=${id}]`).onclick = e => video.play();
    document.querySelector(`[button-pause=${id}]`).onclick = e => video.pause();
    
    setInterval (() =>{
        const time = (video.currentTime / video.duration) * 100; 
        const sizeTime = document.querySelector(`[progress-line=${id}] > div`);
        sizeTime.style.width = `${time}%`;
        sizeTime.innerHTML = `${time.toFixed(0)}%`
    },1)
   
    const volumeBox = document.querySelector(`[volume=${id}]`);
    const volume = document.querySelector(`[volume=${id}] > div`);
    volumeBox.addEventListener('click', e =>{ 
        const size = (e.offsetY / 30) * 100
        video.volume = (size*1)/100
        volume.style.height = `${size}%`
    })
    
    const sizeTime = document.querySelector(`[progress-line=${id}]`);
    
    sizeTime.addEventListener('click', (e) =>{
        video.currentTime = mathtime(e)
    })
    
    
    function mathtime(e){
        const size = (e.offsetX / 500) * 100
             return (size*video.duration)/100
    }
}

configVideo('video') 
