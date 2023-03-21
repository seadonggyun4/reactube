import {CommonStore} from "context/commonContext";
import {GlobalComponent} from "context/componentContext";

export default function Body({children}){
    const {BackgroundEffect} = GlobalComponent()
    const { common } = CommonStore()
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