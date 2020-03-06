import axios from 'axios'
import configService from './config'

const platziMusicService = axios.create()

platziMusicService.defaults.baseURL = configService.apiUrl; //Asignacion de API_URL_BASE

export default platziMusicService