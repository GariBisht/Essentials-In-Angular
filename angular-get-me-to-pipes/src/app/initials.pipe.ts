import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    // logic to implemnet 
    let values = value.split(' ');
    return values[0][0] + values[1][0];
  }

}


// import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// @Pipe({ name: 'sanitizeHtml'})

// export class sanitizeHtmlPipe implements PipeTransform  {

//   constructor(private _sanitizer:DomSanitizer) { }

//   transform(value:string):SafeHtml {
//     return this._sanitizer.bypassSecurityTrustHtml(value);
//   }
// }


// import { Injectable } from '@angular/core';
// import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
// import { SnackbarComponent } from './snackbar/snackbar.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class NotificationService {

//   constructor(public _snackbar:MatSnackBar) { }
//   config:MatSnackBarConfig=
//   {
//     duration:3000,
//     horizontalPosition:'center',
//     verticalPosition:'top'
//   }
//   success(msg)
//   {
//     // this.config['panelClass']=['Notification','success'];
//     // this._snackbar.open(msg,'',this.config);
//     this.config.data={message:msg};
//     this.config.panelClass='success-message';
//     this.config.horizontalPosition='center';
//     this.config.verticalPosition='top';
//     this._snackbar.openFromComponent(SnackbarComponent, this.config);
//   }
//   warn(msg)
//   {
//     this.config.panelClass='';
//     this.config.horizontalPosition='center';
//     this.config.verticalPosition='top';
//     this.config.panelClass='success-message';
//     // this.config['panelClass']=['Notification','warn'];
//     // this._snackbar.open(msg,'',this.config);
//     this.config.data={message:msg};
//     this._snackbar.openFromComponent(SnackbarComponent, this.config);
//   }
//   custom(msg)
//   {
//     this.config.panelClass='';
//     this.config.data={message:msg};
//     this.config.horizontalPosition='center';
//     this.config.verticalPosition='top';
//     this._snackbar.openFromComponent(SnackbarComponent, this.config);
//   }
//   displayMessage(msg)
//   {
//     this.config.panelClass='';
//     this.config.horizontalPosition='center';
//     this.config.verticalPosition='bottom';
//     this.config.duration=5000;

//     this._snackbar.open(msg, 'Close',this.config);
//   }
// }



//.ts File 


// import { Component, OnInit,Inject,ViewEncapsulation } from '@angular/core';
// import {
//   MatSnackBarRef,
//   MAT_SNACK_BAR_DATA
// } from "@angular/material/snack-bar";

// @Component({
//   selector: 'app-snackbar',
//   templateUrl: './snackbar.component.html',
//   styleUrls: ['./snackbar.component.scss'],
//   encapsulation: ViewEncapsulation.None // added
// })
// export class SnackbarComponent implements OnInit {

//   constructor(
//     public sbRef: MatSnackBarRef<SnackbarComponent>,
//     @Inject(MAT_SNACK_BAR_DATA) public data: any
//   ) {}

//   ngOnInit(): void {
//   }

// }





// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';

// @Injectable({
// 	providedIn: 'root',
// })
// export class DataService {
// 	// url = environment.baseUrl;
// 	url = environment.API_URL;
// 	//url1 = environment.baseUrl1;
// 	user: string | null;
// 	a: any;
// 	token: any;
// 	httpOptions: { headers: any; };

// 	constructor(private http: HttpClient) {
		
// 		this.user = localStorage.getItem('currentUser') || '{}';
// 		this.a = JSON.parse(this.user);
// 		// console.log(this.a);
// 		this.token = this.a.token;
// 		// console.log(this.token);
// 		this.httpOptions = {
// 			headers: new HttpHeaders({
// 				Authorization: `${this.token}`
// 			})
// 		}
// 	}

// 	postRequest(url: string, data: any) {
// 		return this.http.post(this.url + url, data, this.httpOptions);
// 	}

// 	postRequest1(url: string, data: any, data1:any) {
// 		return this.http.post(this.url + url, data,data1);
// 	}

// 	getRequest(url: string) {
// 		return this.http.get(this.url + url);
// 	}
// 	getRequestBy(url:any,data:any){

// 		this.httpOptions = {
// 			headers: new HttpHeaders({
// 				Authorization: `${this.token}`,
// 				email:data
// 			})
// 		}
// 		return this.http.get(this.url + url,data);
// 	}

// 	putRequest(url: string, data: any) {
// 		return this.http.put(this.url + url, data, this.httpOptions);
// 	}

// 	putRequest1(url: string) {
// 		return this.http.put(this.url + url, this.httpOptions);
// 	}

// 	deleteRequest(url: string) {
// 		return this.http.delete(this.url + url , this.httpOptions);
// 	}

// }





// 
// export const ip_to_config = {
//   IP_ADDRESS_TO_CHANGE:'localhost'
// }

// export const environment = {
//   production: false,
//   hostName: "http://"+ip_to_config.IP_ADDRESS_TO_CHANGE+"/home/",
//   baseUrl:'',
//   API_URL :'http://'+ip_to_config.IP_ADDRESS_TO_CHANGE+':4000/',

// }


















// encrypt(str: string, secret: any) {
  //       str = Math.random().toString(36).substring(2, 10) + str;
  //       var _strkey = Base64.decode(secret);
  //       _strkey.split(",");
  //       var text = CryptoJS.enc.Utf8.parse(str);
  //       var Key = CryptoJS.enc.Base64.parse(_strkey.split(",")[1]); //secret key
  //       var IV = CryptoJS.enc.Base64.parse(_strkey.split(",")[0]); //16 digit
  //       var encryptedText = CryptoJS.AES.encrypt(text, Key, { keySize: 128 / 8, iv: IV, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  //       var b64 = encryptedText.toString();
  //       var e64 = CryptoJS.enc.Base64.parse(b64);
  //       // var eHex = e64.toLocaleString(CryptoJS.enc.Hex);
  //       var eHex = e64.toLocaleString();
  //       return eHex.toUpperCase();
  //   }
  
  //   decrypt(str: string, secret: any) {
  //       try {
  //           var _strkey = Base64.decode(secret);
  //           var reb64 = CryptoJS.enc.Hex.parse(str);
  //           var text = reb64.toString(CryptoJS.enc.Base64);
  //           var Key = CryptoJS.enc.Base64.parse(_strkey.split(",")[1]); //secret key
  //           var IV = CryptoJS.enc.Base64.parse(_strkey.split(",")[0]); //16 digit
  //           var decryptedText = CryptoJS.AES.decrypt(text, Key, { keySize: 128 / 8, iv: IV, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  //           return decryptedText.toString(CryptoJS.enc.Utf8); //binascii.unhexlify(decryptedText)
  //       } catch (e) {
  //           console.log("Error", e)
  //       }
  //   }