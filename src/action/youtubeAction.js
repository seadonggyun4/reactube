import youtubeAPI from "api/youtubeAPI";


class YoutubeAction {
    // apiClient 받기
    constructor(apiClient) {
        this.apiClient = apiClient
    }
    
    // 검색어에 따른 분기처리 메서드
    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }


    //  =========================================== [ action ] ===========================================

    // 일반 검색
    async #searchByKeyword(keyword){
        return this.apiClient
            .search({
                params: {
                    part:'snippet',
                    maxResults: 25,
                    type: 'video',
                    q: keyword
                }
            })
            .then((res) => res.data.items.map(item => ({...item, id: item.id.videoId})))
    }
    
    
    // 가장 인기있는 검색
    async #mostPopular(){
       const {data} = await this.apiClient
            .videos({
                params: {
                    part:'snippet',
                    maxResults: 25,
                    chart: 'mostPopular'
                }
            })

            return data.items
    }


    // 채널 디테일 Image URL
    async channelImageURL(id){
        return this.apiClient
            .channels({
                params: {
                    part:'snippet',
                    id: id
                }
            })
            .then((res) => res.data.items[0].snippet.thumbnails.default.url)
    }

    // 연관 비디오 검색
    async relatedVideo(id){
        return this.apiClient
            .search({
                params: {
                    part:'snippet',
                    maxResults: 25,
                    type: 'video',
                    relatedToVideoId: id
                }
            })
            .then((res) => res.data.items.map(item => ({...item, id: item.id.videoId})))
    }
}

const youtubeAPIClient = new youtubeAPI()
const youtubeAction = new YoutubeAction(youtubeAPIClient)

export default youtubeAction