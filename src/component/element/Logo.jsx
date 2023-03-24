import {Link} from "react-router-dom";
import {GlobalComponent} from "context/componentContext";

export default function Logo(){
    const { LogoIcon } = GlobalComponent()

    console.log("✨Logo✨")

    return(
        <Link to='/' className="flexCenter gap-3">
            <div className="h-12">
                <LogoIcon width="100%" heigh="100%"/>
            </div>
            <h1 className="text-2xl font-bold text-white">
                Reactube
            </h1>
        </Link>
    )
}