import { Component } from '@angular/core';
import { Video } from './video';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'playlist',
    templateUrl: './playlist.component.html',
    // tslint:disable-next-line:use-input-property-decorator
    inputs: ['videos']

})

// tslint:disable-next-line:one-line
export class PlaylistComponent{
    // tslint:disable-next-line:one-line
    onSelect(vid: Video){
        console.log(JSON.stringify(vid));
    }

}
