import { Component } from '@angular/core';

@Component({
  selector: 'app-video-mosaic',
  templateUrl: './video-mosaic.component.html',
  styleUrl: './video-mosaic.component.scss'
})
export class VideoMosaicComponent {

  videos = [
    { url: 'https://www.instagram.com/reel/C-gsjHnOch0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { url: 'https://www.instagram.com/reel/C-gsjHnOch0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { url: 'https://www.instagram.com/reel/C-gsjHnOch0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' }
    // Add more video URLs as needed
  ];
}
