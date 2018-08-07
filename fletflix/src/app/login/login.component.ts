import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Usuario} from "../servicios/usuario.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  respuesta: any
  clickeado : boolean;
  correoElectronico;
  acceso: string;
  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;
  constructor(private cookieService: CookieService, private http: HttpClient) {this.captures = []; }

  public captures: Array<any>;
  ngOnInit() {
    this.cookieService.set( 'user', 'Caro' );
    this.cargar();
  }
  capture() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.video.nativeElement.pause();
    this.clickeado = true;
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
  }
  getHeaders(subscriptionKey: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/octet-stream');
    headers = headers.set('Ocp-Apim-Subscription-Key', subscriptionKey);

    return headers;
  }

  getParams() {
    const httpParams = new HttpParams()
      .set('returnFaceId', 'true')
      .set('returnFaceLandmarks', 'false')
      .set(
        'returnFaceAttributes',
        'age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
      );

    return httpParams;

  }
  makeblob(dataURL) {
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
  scanImage() {

    const headers = this.getHeaders('7cdb51cf3f7345f8a95fc9b3aaf6c885');
    const params = this.getParams();
    const blob = this.makeblob(this.canvas.nativeElement.toDataURL("image/png"));
    this.respuesta = this.http.post(
      'https://eastus.api.cognitive.microsoft.com/face/v1.0/detect',
      blob,
      {
        params,
        headers
      }
    ).subscribe(value => console.log(value));
    return this.respuesta
  }


  public ngAfterViewInit() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.src = window.URL.createObjectURL(stream);
        this.video.nativeElement.play();
      });
    }
  }

  cargar(){
    this.http.get<Usuario>('http://localhost:3000/Usuario/mostrar')
      .subscribe((value: Usuario) => {
          console.log(value)
        }
      );

  }

  presentarMensaje(){
    return this.acceso = "Usted ha sido identificado"
  }
}
interface caracteristicas{
  faceAttributes: cara[],
  gender: string,
  hair: cabello[]
}

interface cara{
  age: number
}
 interface cabello{
   hair: string[6]
 }
