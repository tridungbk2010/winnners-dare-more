import { Video } from './model';

export const GET_ALL_VIDEOS = 'get_all_videos';
export type GET_ALL_VIDEOS = typeof GET_ALL_VIDEOS;
export interface GetAllVideos {
  type: GET_ALL_VIDEOS;
  token: string;
}

export const GET_ALL_VIDEOS_SUCCESS = 'get_all_videos_success';
export type GET_ALL_VIDEOS_SUCCESS = typeof GET_ALL_VIDEOS_SUCCESS;
export interface GetAllVideosSuccess {
  type: GET_ALL_VIDEOS_SUCCESS;
  response: Video[];
}

export const GET_ALL_VIDEOS_FAILURE = 'get_all_videos_failure';
export type GET_ALL_VIDEOS_FAILURE = typeof GET_ALL_VIDEOS_FAILURE;
export interface GetAllVideosFailure {
  type: GET_ALL_VIDEOS_FAILURE;
  error: string;
}

export type Actions = GetAllVideos | GetAllVideosSuccess | GetAllVideosFailure;

export const getAllVideos = (token: string): Actions => ({
  type: GET_ALL_VIDEOS,
  token
});
