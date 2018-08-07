import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-reconocimiento-facial',
  templateUrl: './reconocimiento-facial.component.html',
  styleUrls: ['./reconocimiento-facial.component.css']
})
export class ReconocimientoFacialComponent implements OnInit {

  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  public captures: Array<any>;
  imageString = '';
  faceApiResponse: Observable<any>;
  subscriptionKey: string;

  constructor(private httpClient: HttpClient, private cameraService: AbstractCameraService) {
    this.captures = [];

  }

  processImage() {
    if (!this.subscriptionKey) {
      return;
    }

    this.faceApiResponse = this.cameraService.getPhoto().pipe(
      switchMap(base64Image => {
        this.imageString = base64Image;
        return this.scanImage(
          this.subscriptionKey,
          base64Image
        );
      })
    );
  }


  public ngOnInit() { }

  public ngAfterViewInit() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.src = window.URL.createObjectURL(stream);
        this.video.nativeElement.play();
      });
    }
  }

  public capture() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    this.video.nativeElement.pause();

  }
  scanImage(subscriptionKey: string, base64Image: string) {
    const headers = this.getHeaders(subscriptionKey);
    const params = this.getParams();
    const blob = this.makeblob(base64Image);

    return this.httpClient.post(
      '',
      blob,
      {
        params,
        headers
      }
    );
  }

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

  private getHeaders(subscriptionKey: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/octet-stream');
    headers = headers.set('Ocp-Apim-Subscription-Key', subscriptionKey);

    return headers;
  }

  private getParams() {
    const httpParams = new HttpParams()
      .set('returnFaceId', 'true')
      .set('returnFaceLandmarks', 'false')
      .set(
        'returnFaceAttributes',
        'age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
      );

    return httpParams;
  }
}

interface ICameraService {
  getPhoto(): Observable<string>;
}

export abstract class AbstractCameraService implements ICameraService {
  abstract getPhoto(): Observable<string>;
}
