export default function BackgroundEffect({darkmode}){

    console.log("✨BackgroundEffect✨")

    return(
        <div className={darkmode ? 'starWrapperDark' : 'starWrapperLight'}>
            <div className="stars1"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
        </div>
    )
}