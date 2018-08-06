import {Component, OnInit} from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';
import {browser} from "protractor";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Usuario} from "../servicios/usuario.service";

@Component({
  selector: 'app-registro-facial',
  templateUrl: './registro-facial.component.html',
  styleUrls: ['./registro-facial.component.css']
})
export class RegistroFacialComponent implements OnInit {
  snap : any;
  constructor(private http: HttpClient) {
  }
  procesarImagen(){
    var params = {
      "returnFaceId": "true",
      "returnFaceLandmarks": "false",
      "returnFaceAttributes":
      "age,gender,headPose,smile,facialHair,glasses,emotion," +
      "hair,makeup,occlusion,accessories,blur,exposure,noise"
    };
    var url = 'https://eastus.api.cognitive.microsoft.com/face/v1.0/detect?'
    const queryString = Object.entries(params).map(([key, value]) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }).join('&');
    console.log("Procesando imageeeen!!!")
    console.log(url + queryString)
    console.log("snap:   "+this.snap)
    console.log("makeblob: "+ this.makeblob(this.snap))


    this.http.post(url+queryString, {
      processData: false, contentType: false,
      data: this.makeblob(this.snap)
    }, httpOptions).subscribe(value => console.log(value))
  }



  @ViewChild("videoElement") videoElement: any
  video: any;



  @ViewChild("canvas") canvasElement: any
  canvas: any;


  ngOnInit() {
    this.video = this.videoElement.nativeElement


  }

  start() {
    this.initCamera({video: true, audio: false});
  }

  sound() {
    this.initCamera({video: true, audio: true});
  }

  initCamera(config: any) {
    var browser = <any>navigator;
    var video = document.querySelector('#cameraStream'),
      image = document.querySelector('#snap'),
      start_camera = document.querySelector('#start-camera'),
      controls = document.querySelector('.controls'),
      take_photo_btn = document.querySelector('#take-photo'),
      delete_photo_btn = document.querySelector('#delete-photo'),
      download_photo_btn = document.querySelector('#download-photo'),
      error_message = document.querySelector('#error-message');

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    if (browser.getUserMedia) {
      browser.mediaDevices.getUserMedia(config).then(stream => {
        this.video.src = window.URL.createObjectURL(stream);
        this.video.play();
      });

    }


  }

  takeSnapshot() {
    // Here we're using a trick that involves a hidden canvas element.

    var hidden_canvas = document.querySelector('canvas'),
      context = hidden_canvas.getContext('2d');
    var width = this.video.videoWidth,
      height = this.video.videoHeight;
    if (width && height) {
      hidden_canvas.width = width;
      hidden_canvas.height = height;
      context.drawImage(this.video, 0, 0, width, height);
      this.video.pause();
      this.snap = hidden_canvas.toDataURL('image/jpeg')
      return this.snap;

    }
  }
/*
  makeblob(dataURL:any) {
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
*/
  private makeblob(dataURL) {
    const BASE64_MARKER = ';base64,';
    const parts = dataURL.split(BASE64_MARKER);
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/octet-stream',
    "Ocp-Apim-Subscription-Key": '7cdb51cf3f7345f8a95fc9b3aaf6c885'
  })
};

