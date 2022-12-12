import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChannelsResponse } from './upload.model';

const BASE_URL = "https://dev-project-upskill-grupo02.pantheonsite.io/";

@Injectable({
  providedIn: 'root'
})
export class UploadService { 

  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get(BASE_URL + "api/videos");
  }

  getChannel() {
    return this.http.get<ChannelsResponse>(BASE_URL + "api/channel");
  }
}