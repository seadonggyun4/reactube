import {GlobalComponent} from "context/componentContext";
import { useRecoilState } from "recoil";
import { commonStore } from "store/commonStore";


export default function Body({children}){
    const {BackgroundEffect} = GlobalComponent()
    const [ isCommon ] = useRecoilState(commonStore)
    const { darkmode } = isCommon

    console.log("✨Body✨")


    return(
        <section className={darkmode ? 'bodyDark' : 'bodyLight'}>
            <div className="z-10 w-full min-h-screen">
                { children }
            </div>
            <BackgroundEffect darkmode={darkmode}/>
        </section>
    )
}