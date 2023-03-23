import {GlobalComponent} from "context/componentContext";
import { useRecoilState } from "recoil";
import { commonDATA } from "store/commonStore";

export default function Body({children}){
    const {BackgroundEffect} = GlobalComponent()
    const [ common ] = useRecoilState(commonDATA)
    const { darkmode } = common


    return(
        <section className={darkmode ? 'bodyDark' : 'bodyLight'}>
            <div className="z-10 w-full min-h-screen">
                { children }
            </div>
            <BackgroundEffect darkmode={darkmode}/>
        </section>
    )
}