// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface GIFResponse {
  data: GIFDatum[];
  meta: Meta;
  pagination: Pagination;
}

export interface IGifItem {
  gif: IStill;
  still: IStill;
  height: number;
  title: string;
}

export interface GIFDatum {
  analytics: Analytics;
  analytics_response_payload: string;
  bitly_gif_url: string;
  bitly_url: string;
  content_url: string;
  embed_url: string;
  id: string;
  images: Images;
  import_datetime: string;
  is_sticker: number;
  rating: Rating | string;
  slug: string;
  source: string;
  source_post_url: string;
  source_tld: SourceTLD | string;
  title: string;
  trending_datetime: string;
  type: Type | string;
  url: string;
  user?: User;
  username: string;
}

export interface Analytics {
  onclick: Onclick;
  onload: Onclick;
  onsent: Onclick;
}

export interface Onclick {
  url: string;
}

export interface Images {
  "480w_still": IStill;
  downsized: IStill;
  downsized_large: IStill;
  downsized_medium: IStill;
  downsized_small: DownsizedSmall;
  downsized_still: IStill;
  fixed_height: { [key: string]: string };
  fixed_height_downsampled: { [key: string]: string };
  fixed_height_small: { [key: string]: string };
  fixed_height_small_still: IStill;
  fixed_height_still: IStill;
  fixed_width: { [key: string]: string };
  fixed_width_downsampled: { [key: string]: string };
  fixed_width_small: { [key: string]: string };
  fixed_width_small_still: IStill;
  fixed_width_still: IStill;
  looping: { [key: string]: string };
  original: { [key: string]: string };
  original_mp4: DownsizedSmall;
  original_still: IStill;
  preview: DownsizedSmall;
  preview_gif: IStill;
  preview_webp: IStill;
}

export interface IStill {
  height: string;
  url: string;
  width: string;
  size?: string;
}

export interface DownsizedSmall {
  height: string;
  mp4: string;
  mp4_size: string;
  width: string;
}

export enum Rating {
  G = "g",
  PG = "pg",
}

export enum SourceTLD {
  Empty = "",
  WWWNickCOM = "www.nick.com",
  ZinzenaTumblrCOM = "zinzena.tumblr.com",
}

export enum Type {
  GIF = "gif",
}

export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  display_name: string;
  is_verified: boolean;
  profile_url: string;
  username: string;
}

export interface Meta {
  msg: string;
  response_id: string;
  status: number;
}

export interface Pagination {
  count: number;
  offset: number;
  total_count: number;
}
