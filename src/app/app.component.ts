import { Component } from '@angular/core';
import { Config } from './config.service';
import { Video } from './video';
import { PlaylistComponent } from './playlist.component';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  mainheading = Config.MAIN_HEADING;
  videos: Array<Video>;

    // tslint:disable-next-line:one-line
    constructor(){
      this.videos = [
        new Video(1, 'Google', 'www.google.com', 'A'),
        new Video(2, 'Yahoo', 'www.yahoo.com', 'B')
      ];
    }
}
