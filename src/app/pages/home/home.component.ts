import { Component, OnInit } from '@angular/core';
import { Video, Channel } from 'src/app/services/upload.model';
import { UploadService } from 'src/app/services/upload.service';
import { ActivatedRoute } from '@angular/router';
import { faBookmark as faBookmarkSolid, faHomeUser, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  id_channel!: number;
  videos: Video[] = [];
  video: Video = {} as Video;

  channels: Channel[] = [];
  channel: Channel = {} as Channel;

  faHomeUser = faHomeUser;
  faBookmark = faBookmark;
  faBookmarkSolid = faBookmarkSolid;
  faShareNodes = faShareNodes;

  constructor(private route: ActivatedRoute, private upload: UploadService) { }

  /* toggleFavorite(id_video: string) {
    this.upload.toggleFavorite(parseInt(id_video));
  }

  itsFavorite(id_video: string) {
    return this.upload.itsFavorite(parseInt(id_video));
  } */

  ngOnInit(): void {
    this.upload.getVideos().subscribe((video) => {
      this.videos = video;
    });
  }
}