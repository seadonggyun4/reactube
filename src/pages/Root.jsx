import {Outlet} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {YoutubeProvider} from "context/YoutubeContext";
import {GlobalComponent} from "context/componentContext";


export default function Root(){
    const {Header, Body, ButtonBar} = GlobalComponent()
    const queryClient = new QueryClient();

    return(
        <Body>
            <Header />
            <ButtonBar />
            <main className="px-5 pb-5 lg:px-10 xl:px-20 2xl:px-40">
                <QueryClientProvider client={queryClient}>
                    <YoutubeProvider>
                        <Outlet/>
                    </YoutubeProvider>
                </QueryClientProvider>
            </main>
        </Body>
    )
}