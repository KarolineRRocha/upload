import { VideosResponse } from './../../services/upload.model';

import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';
import { Channel } from 'src/app/services/upload.model';
import { Video } from 'src/app/services/upload.model';



@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  videos: Video[] = [];

  video: Video = {} as Video;

  channels: Channel[] = [];

  video_ready: boolean = false;

  constructor(
    private upload: UploadService, 
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
    ) {  }

  ngOnInit(): void {


  this.upload.getVideos().subscribe(video => {
      this.videos = video;
      console.log(video)
  })

  let id_video = this.route.snapshot.params['id_video'];
    this.upload.getVideoPlayer(id_video).subscribe(video => {    
        this.videos = <Video[]>video;
        this.video = this.videos[0];

        //mudei essa parte do código para poder mostra que "video" só tem uma posição pois o video recebe um video por vez!
        /* this.video = video[0]; */
        /* this.videos = this.videos[0]; */
        console.log(video);
        /* console.log(id_video + ' estou aqui ****'); */
    
      

        //************ Substitui a propriedade url_video *********** */
    this.videos.forEach( vid => {
     vid.url_video = vid.url_video.replace("watch?v=", "embed/");
     console.log(vid.url_video)

     
      /*Para obter dados de date*/
       let current_data : Date = new Date();
       let date2 = new Date(vid.created)
       var Difference_In_Time = current_data.getTime() - date2.getTime();
       let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
       this.video.created = Difference_In_Days.toString();
      console.log(Difference_In_Days);
      
    });

     //************ transforma minha url em URLSAFE  ************* */
    this.videos.forEach(v => {
      /* v.url = this.sanitizer.bypassSecurityTrustResourceUrl(v.url_video); */

      //com a mudanção de mostra que video tem uma só posição, precisei refazer o sanitizer:
      this.video.url = this.sanitizer.bypassSecurityTrustResourceUrl(v.url_video);
      /* console.log(v.url) */

      
    })
    this.video_ready = true;
  })
}
}