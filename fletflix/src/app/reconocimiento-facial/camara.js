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
