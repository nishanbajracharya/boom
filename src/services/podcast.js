import http from '../utils/http';
import API from '../constants/api';

export function getBestPodcasts() {
  return http.get(API.BEST_PODCASTS).json(response => response).catch(err => err);
}