import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
//not Formatted Values
  amount = 223.4567;
  channelName = "GetAngularTalk";
  mark = 0.8945;
  today = new Date();
  name = "Garima Bisht";
}
