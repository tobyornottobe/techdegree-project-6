

$('video').mediaelementplayer();

const captionWrapper = document.querySelector('.captionWrapper');
const caption = document.querySelectorAll('span');
const vid = document.querySelector('video');


vid.addEventListener("timeupdate", () => {
  for (let i = 0; i < caption.length; i++) {

    let datastart = caption[i].getAttribute('data-start');
    let dataend = caption[i].getAttribute('data-end');
    let currenttime = vid.currentTime;
    console.log(currenttime);

      if (currenttime >= datastart && currenttime <= dataend) {
              caption[i].style.color = "orange";
      } else {
              caption[i].style.color = "";
      }
  }
});

captionWrapper.addEventListener('click', (e) => {
    if(e.target.tagName == "SPAN"){
        vid.currentTime = e.target.getAttribute("data-start");
    }
});
