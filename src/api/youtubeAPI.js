import api from "api";


export default class youtubeAPI {
    // search API 통신
    async search(params) {
        return api.get('search', params);
    }

    // mostPopular API 통신
    async videos(params){
        return api.get('videos', params);
    }

    // 채널 상세내용 API통신
    async channels(params){
        return api.get('channels', params)
    }

}

