import {createContext, useContext} from "react";
import Client from "api/index";
import Youtube from "api/youtube";


// YoutubeContext생성
export const YoutubeContext = createContext();



// YoutubeProvider 생성
export function YoutubeProvider({children}){
    const client = new Client()
    const youtube = new Youtube(client)


    return(
        <YoutubeContext.Provider value={{youtube}}>
            {children}
        </YoutubeContext.Provider>
    )
}


// outubeStore생성
export function YoutubeStore(){
    return useContext(YoutubeContext)
}