const playVideo = (event) => {
    event.preventDefault();
    const videoId = 'mUGYPlAgJPw' 
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`);
    iframe.setAttribute("allowfullscreen", "");
    iframe.style.width = "100%";
    iframe.style.height = "auto";
    
    const thumbnail = document.getElementById("video-thumbnail-click");
    thumbnail.style.display = "none";
    
    const playerDiv = document.getElementById("player");
    playerDiv.appendChild(iframe);
  }

  document.getElementById("video-thumbnail-click").addEventListener("click", playVideo);