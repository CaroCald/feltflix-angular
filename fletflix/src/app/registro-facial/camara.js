document.addEventListener('DOMContentLoaded', function () {
  var video = document.querySelector('#camera-stream'),
    image = document.querySelector('#snap'),
    start_camera = document.querySelector('#start-camera'),
    controls = document.querySelector('.controls'),
    take_photo_btn = document.querySelector('#take-photo'),
    delete_photo_btn = document.querySelector('#delete-photo'),
    download_photo_btn = document.querySelector('#download-photo'),
    error_message = document.querySelector('#error-message');

  navigator.getMedia = ( navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);

  if(!navigator.getMedia){
    displayErrorMessage("Your browser doesn't have support for the navigator.getUserMedia interface.");
  }
  else{
    navigator.getMedia(
      {video: true },
      function(stream){
        video.src = window.URL.createObjectURL(stream);
        video.play();
        video.onplay = function() {showVideo();};
      },
      function(err){
        displayErrorMessage("There was an error with accessing the camera stream: " + err.name, err);
      }
    );
  }



  // Mobile browsers cannot play video without user input,
  // so here we're using a button to start it manually.
  start_camera.addEventListener("click", function(e){

    e.preventDefault();

    // Start video playback manually.
    video.play();
    showVideo();

  });


  take_photo_btn.addEventListener("click", function(e){

    e.preventDefault();

    var snap = takeSnapshot();

    // Show image.
    image.setAttribute('src', snap);
    image.classList.add("visible");

    // Enable delete and save buttons
    delete_photo_btn.classList.remove("disabled");
    download_photo_btn.classList.remove("disabled");

    // Set the href attribute of the download button to the snap url.
    download_photo_btn.href = snap;

    // Pause video playback of stream.
    video.pause();

  });


  delete_photo_btn.addEventListener("click", function(e){

    e.preventDefault();

    // Hide image.
    image.setAttribute('src', "");
    image.classList.remove("visible");

    // Disable delete and save buttons
    delete_photo_btn.classList.add("disabled");
    download_photo_btn.classList.add("disabled");

    // Resume playback of stream.
    video.play();

  });



  function showVideo(){
    // Display the video stream and the controls.

    hideUI();
    video.classList.add("visible");
    controls.classList.add("visible");
  }


  function takeSnapshot(){
    // Here we're using a trick that involves a hidden canvas element.

    var hidden_canvas = document.querySelector('canvas'),
      context = hidden_canvas.getContext('2d');

    var width = video.videoWidth,
      height = video.videoHeight;

    if (width && height) {

      // Setup a canvas with the same dimensions as the video.
      hidden_canvas.width = width;
      hidden_canvas.height = height;

      // Make a copy of the current frame in the video on the canvas.
      context.drawImage(video, 0, 0, width, height);

      // Turn the canvas image into a dataURL that can be used as a src for our photo.

      return hidden_canvas.toDataURL('image/jpeg');
    }
  }


  function displayErrorMessage(error_msg, error){
    error = error || "";
    if(error){
      console.error(error);
    }

    error_message.innerText = error_msg;

    hideUI();
    error_message.classList.add("visible");
  }


  function hideUI(){
    // Helper function for clearing the app UI.

    controls.classList.remove("visible");
    start_camera.classList.remove("visible");
    video.classList.remove("visible");
    error_message.classList.remove("visible");
  }

});

function processImage() {
  // Replace <Subscription Key> with your valid subscription key.
  var subscriptionKey = "7cdb51cf3f7345f8a95fc9b3aaf6c885";

  var uriBase =
    "https://eastus.api.cognitive.microsoft.com/face/v1.0/detect";

  // Request parameters.
  var params = {
    "returnFaceId": "true",
    "returnFaceLandmarks": "false",
    "returnFaceAttributes":
    "age,gender,headPose,smile,facialHair,glasses,emotion," +
    "hair,makeup,occlusion,accessories,blur,exposure,noise"
  };
  makeblob = function (dataURL) {
    var BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
      var parts = dataURL.split(',');
      var contentType = parts[0].split(':')[1];
      var raw = decodeURIComponent(parts[1]);
      return new Blob([raw], { type: contentType });
    }
    var parts = dataURL.split(BASE64_MARKER);
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;

    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  };
  // Display the image.
  var sourceImageUrl = document.querySelector('#snap').src;
  console.log('uno'+sourceImageUrl);

  // Perform the REST API call.
  $.ajax({
    url: uriBase + "?" + $.param(params),

    // Request headers.
    beforeSend: function(xhrObj){
      xhrObj.setRequestHeader("Content-Type","application/octet-stream");
      xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
    },

    type: "POST",
    processData: false, contentType: false,
    // Request body.

    data: makeblob(sourceImageUrl)
  })

    .done(function(data) {
      // Show formatted JSON on webpage.
      var datos = JSON.stringify(data, null, 2);
      console.log(datos);
      $("#responseTextArea").val(datos);
    })

    .fail(function(jqXHR, textStatus, errorThrown) {
      // Display error message.
      var errorString = (errorThrown === "") ?
        "Error. " : errorThrown + " (" + jqXHR.status + "): ";
      errorString += (jqXHR.responseText === "") ?
        "" : (jQuery.parseJSON(jqXHR.responseText).message) ?
          jQuery.parseJSON(jqXHR.responseText).message :
          jQuery.parseJSON(jqXHR.responseText).error.message;
      alert(errorString);
    });
};

