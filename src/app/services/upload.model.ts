import { SafeResourceUrl } from "@angular/platform-browser";

export interface ChannelsResponse {
    data: Channel[];
}

export interface Channel {
    id: string;
    channel_name: string;
    channel_description: string;
    author: string;
    category: string;
    user_photo: string;
    banner: string;
    title: string;
    thumbnail: string;
    created: string;
    title_video: string;
    id_video: string;
}

export interface VideoCardsResponse {
    data: VideoCard[];
}
export interface VideoCard {    
    id_channel: string;
    title_channel: string;
    author: string;
    category: string;
    created: string;
    banner: string;
    user: string;
    thumbnail: string;
    title_video: string;
    id_video: string;
}

export interface VideosResponse {
    data: Video[];
}

export interface Video {
    id: string;
    title: string;
    description: string;
    author_video: string;
    category: string;
    tags: string;
    channel: string;
    thumbnail: string;
    url_video: string;
    comment: string;
    duration: string;
    id_user: string;
    comment_count: string;
    url: SafeResourceUrl;
    created: string;
    field_time_video: string;
    channel_name: string;
    field_video_visualization: string;
    name: string;
}
export interface PlaylistResponse {
    data: Playlist[];
}

export interface Playlist {
    id: string;
    name: string;
    title: string;
    category: string;
    url_video: string;
    thumbnail: string;
    id_video: string;
}

export interface TagsResponse {
    data: Tag[];
}

export interface Tag {
    name: string;
}

export interface ThemesResponse {
    data: Themes[];
}
export interface Themes {
    id: string;
    title: string;
    tags: string;
    user: string;
    header: string;
    text_teaser: string;
}

export interface CommentsResponse {
    data: Comment[];
}
export interface Comment {
    name: string;
    email: string;
    comment: string;
    post_date: string;
    post_date_comment: string;
    user_name: string;
    user_photo: string;
}

export interface PostCommentChannel {
    entity_id: [{[key: string]: number}]
    entity_type:[{[key: string]: string}]
    comment_type:[{[key: string]: string}]
    field_name:[{[key: string]: string}]
    field_email_content_commet:[{[key: string]: string}]
    field_nome_content_comment_:[{[key: string]: string}]
    comment_body:[{[key: string]: string}]
}