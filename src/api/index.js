import axios from "axios";


export default class Client {
    constructor() {
        // axios 통신 기본 세팅
        this.httpClient = axios.create({
            baseURL: 'https://youtube.googleapis.com/youtube/v3/',
            params: {
                key: process.env.REACT_APP_YOUTUBE_API_KEY
            }
        })
    }


    // search API 통신
    async search(params) {
        return this.httpClient.get('search', params);
    }

    // mostPopular API 통신
    async videos(params){
        return this.httpClient.get('videos', params);
    }

    // 채널 상세내용 API통신
    async channels(params){
        return this.httpClient.get('channels', params)
    }

}

