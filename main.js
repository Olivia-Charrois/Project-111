Webcam.set({
 width:310,
 height:300,
 image_format : 'png',
 png_format: 90,

 constraints: {
  facingMode: "environment"
    }
});
camera = document.getElementById("camera");

Webcam.attach("#camera");