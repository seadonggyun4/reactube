import {Outlet} from "react-router-dom";
import GlobalComponents from 'GlobalComponents'

export default function Root(){
    const {Header, Body, ButtonBar, ModalContainer} = GlobalComponents

    return(
        <>
            <Body>
                <Header />
                <ButtonBar />
                <main className="px-5 pb-5 lg:px-10 xl:px-20 2xl:px-40">
                    <Outlet/>
                </main>
            </Body>
            <ModalContainer />
        </>
    )
}