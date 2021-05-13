var video = document.querySelector("#videoElement");
const featuring = document.querySelector('.featuring')

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
      featuring.style.opacity = '0'
    });
}