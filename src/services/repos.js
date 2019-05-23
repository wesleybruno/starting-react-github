import { http } from './http'

export const getRepos = (user) => http.get(`users/${user}/repos`);